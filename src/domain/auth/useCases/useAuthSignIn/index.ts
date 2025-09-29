import { AuthCredentials } from '@domain';
import { MutationOptions } from '@infra';
import { useTanstackQueryImpl } from './implementations/tanstackQuery';
import { UseAuthSignInResult } from './props';

export function useAuthSignIn(
  options?: MutationOptions<AuthCredentials>
): UseAuthSignInResult {
  return useTanstackQueryImpl(options);
}
