import { MutationOptions } from '@infra';
import { useTanstackQueryImpl } from './implementations';
import { UseAuthForgotPasswordResult } from './props';

export function useAuthForgotPassword(
  options?: MutationOptions<string>
): UseAuthForgotPasswordResult {
  return useTanstackQueryImpl(options);
}
