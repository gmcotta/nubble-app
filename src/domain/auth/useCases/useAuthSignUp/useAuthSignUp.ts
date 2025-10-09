import { AuthSignUpData } from '@domain';
import { MutationOptions } from '@infra';
import { useTanstackQueryImpl } from './implementations';

export function useAuthSignUp(options?: MutationOptions<AuthSignUpData>) {
  return useTanstackQueryImpl(options);
}
