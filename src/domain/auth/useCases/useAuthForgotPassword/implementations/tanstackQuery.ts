import { useMutation } from '@tanstack/react-query';

import { authService } from '@domain';
import { MutationOptions } from '@infra';
import { UseAuthForgotPasswordResult } from '../props';

export function useTanstackQueryImpl(
  options?: MutationOptions<string>
): UseAuthForgotPasswordResult {
  const { mutate, isPending } = useMutation<string, Error, string>({
    mutationFn: email => authService.forgotPassword(email),
    retry: false,
    onSuccess: message => {
      if (options?.onSuccess) {
        options.onSuccess(message);
      }
    },
    onError: err => {
      if (options?.onError) {
        options.onError(err.message);
      }
    }
  });

  return {
    requestNewPassword: (email: string) => mutate(email),
    isLoading: isPending
  };
}
