import { AuthCredentialsService } from './authCredentialsTypes';
import { useZustandImpl } from './imlplementations/zustand';

export function useAuthCredentialsService(): AuthCredentialsService {
  return useZustandImpl();
}
