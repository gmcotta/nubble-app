import { AuthCredentialsService } from './authCredentialsTypes';
import { useContextAPIImpl } from './implementations/contextAPI';

export function useAuthCredentialsService(): AuthCredentialsService {
  return useContextAPIImpl();
}
