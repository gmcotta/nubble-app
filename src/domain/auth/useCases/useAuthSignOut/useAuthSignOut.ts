import { useTanstackQueryImpl } from './implementations/tanstackQuery';
import { UseAuthSignOutResult } from './props';

export function useAuthSignOut(): UseAuthSignOutResult {
  return useTanstackQueryImpl();
}
