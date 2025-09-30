import { AuthCredentialsService } from './authCredentialsTypes';
import { useContextAPIImpl } from './implementations';

export function useAuthCredentialsService(): AuthCredentialsService {
  return useContextAPIImpl();
}
