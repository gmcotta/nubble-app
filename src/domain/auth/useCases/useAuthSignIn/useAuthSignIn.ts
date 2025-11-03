import { MutationOptions } from '@infra';
import { AuthCredentials } from '../../authTypes';
import { useTanstackQueryImpl } from './implementations/tanstackQuery';
import { UseAuthSignInResult } from './props';

export function useAuthSignIn(
  options?: MutationOptions<AuthCredentials>
): UseAuthSignInResult {
  return useTanstackQueryImpl(options);
}
