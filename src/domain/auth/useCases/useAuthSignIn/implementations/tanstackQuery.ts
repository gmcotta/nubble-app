import { useMutation } from '@tanstack/react-query';

import { AuthCredentials, authService } from '@domain';
import { MutationOptions } from '@infra';
import { MutationVariables } from '../props';

export function useTanstackQueryImpl(
  options?: MutationOptions<AuthCredentials>
) {
  const mutation = useMutation<AuthCredentials, Error, MutationVariables>({
    mutationFn: ({ email, password }) => authService.signIn(email, password),
    onSuccess: ({ token }) => authService.updateToken(token),
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
    retry: false
  });

  return {
    isLoading: mutation.isPending,
    signIn: (variables: MutationVariables) => mutation.mutate(variables)
  };
}
