import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { AuthCredentialsService } from 'services/AuthCredentials';
import { AuthCredentials } from 'domain';

const AuthCredentialsContext = createContext<AuthCredentialsService>({
  authCredentials: null,
  isLoading: false,
  saveCredentials: async () => {},
  removeCredentials: async () => {}
});

export function AuthCredentialsProvider({ children }: PropsWithChildren) {
  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null);
  const [isLoading, _setIsLoading] = useState(false);

  async function saveCredentials(
    newAuthCredentials: AuthCredentials
  ): Promise<void> {
    setAuthCredentials(newAuthCredentials);
  }

  async function removeCredentials(): Promise<void> {
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
