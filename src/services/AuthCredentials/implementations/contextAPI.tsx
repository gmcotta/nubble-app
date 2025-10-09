import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState
} from 'react';

import { registerAuthCredentialsInterceptor } from '@api';
import { AuthCredentials, authService } from '@domain';
import { AuthCredentialsService } from '@services';
import { authCredentialsStorage } from '../authCredentialsStorage';

const AuthCredentialsContext = createContext<AuthCredentialsService>({
  authCredentials: null,
  userId: null,
  isLoading: true,
  saveCredentials: async () => {},
  removeCredentials: async () => {}
});

export function AuthCredentialsProvider({ children }: PropsWithChildren) {
  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchInitialAuthCredentials();
  }, []);

  useEffect(() => {
    const interceptor = registerAuthCredentialsInterceptor({
      authCredentials,
      removeCredentials,
      saveCredentials
    });
    return interceptor;
  }, [authCredentials]);

  async function fetchInitialAuthCredentials() {
    try {
      const storedAuthCredentials = await authCredentialsStorage.get();
      if (storedAuthCredentials) {
        authService.updateToken(storedAuthCredentials.token);
        setAuthCredentials(storedAuthCredentials);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  async function saveCredentials(
    newAuthCredentials: AuthCredentials
  ): Promise<void> {
    authCredentialsStorage.set(newAuthCredentials);
    authService.updateToken(newAuthCredentials.token);
    setAuthCredentials(newAuthCredentials);
  }

  async function removeCredentials(): Promise<void> {
    authCredentialsStorage.remove();
    authService.removeToken();
    setAuthCredentials(null);
  }

  const userId = authCredentials?.user.id ?? null;

  return (
    <AuthCredentialsContext.Provider
      value={{
        authCredentials,
        userId,
        isLoading,
        saveCredentials,
        removeCredentials
      }}
    >
      {children}
    </AuthCredentialsContext.Provider>
  );
}

function useAuthCredentialsContext(): AuthCredentialsService {
  const context = useContext(AuthCredentialsContext);
  if (!context) {
    throw new Error('AuthCredentials must be used within a provider');
  }
  return context;
}

export function useContextAPIImpl() {
  return useAuthCredentialsContext();
}
