import { AxiosError } from 'axios';
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState
} from 'react';

import { api } from '@api';
import { AuthCredentials, authService } from '@domain';
import { AuthCredentialsService } from '@services';
import { authCredentialsStorage } from '../authCredentialsStorage';

const AuthCredentialsContext = createContext<AuthCredentialsService>({
  authCredentials: null,
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
    const interceptor = api.interceptors.response.use(
      response => response,
      async (responseError: AxiosError) => {
        if (responseError.response?.status === 401) {
          if (!authCredentials?.refreshToken) {
            removeCredentials();
            return Promise.reject(responseError);
          }

          const newAuthCredentials =
            await authService.authenticateByRefreshToken(
              authCredentials.refreshToken
            );
          saveCredentials(newAuthCredentials);
          const failedRequest = responseError.config;
          if (!failedRequest) {
            return Promise.reject(responseError);
          }
          failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;

          return api(failedRequest);
        }
      }
    );

    return () => {
      api.interceptors.response.eject(interceptor);
    };
  }, [authCredentials?.refreshToken]);

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

  return (
    <AuthCredentialsContext.Provider
      value={{ authCredentials, isLoading, saveCredentials, removeCredentials }}
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
