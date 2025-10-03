import { AuthCredentials } from '@domain';

export interface AuthCredentialsService {
  authCredentials: AuthCredentials | null;
  saveCredentials: (authCredentials: AuthCredentials) => Promise<unknown>;
  removeCredentials: () => void;
  isLoading: boolean;
}
