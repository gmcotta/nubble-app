import { AuthCredentials } from 'domain';

export interface AuthCredentialsService {
  authCredentials: AuthCredentials | null;
  saveCredentials: (authCredentials: AuthCredentials) => Promise<void>;
  remove: () => void;
  isLoading: boolean;
}
