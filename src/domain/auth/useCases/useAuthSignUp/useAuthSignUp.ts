import { MutationOptions } from '@infra';
import { AuthSignUpData } from '../../authTypes';
import { useTanstackQueryImpl } from './implementations';

export function useAuthSignUp(options?: MutationOptions<AuthSignUpData>) {
  return useTanstackQueryImpl(options);
}
