import { AuthCredentials } from '@domain';

export interface AuthCredentialsService {
  authCredentials: AuthCredentials | null;
  userId: number | null;
  saveCredentials: (authCredentials: AuthCredentials) => Promise<unknown>;
  removeCredentials: () => void;
  isLoading: boolean;
}
