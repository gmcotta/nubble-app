import { useMutation } from '@tanstack/react-query';

import { MutationOptions } from '@infra';
import { useAuthCredentialsService } from '@services';
import { authService } from '../../../authService';
import { AuthCredentials } from '../../../authTypes';
import { MutationVariables, UseAuthSignInResult } from '../props';

export function useTanstackQueryImpl(
  options?: MutationOptions<AuthCredentials>
): UseAuthSignInResult {
  const { saveCredentials } = useAuthCredentialsService();
  const mutation = useMutation<AuthCredentials, Error, MutationVariables>({
    mutationFn: ({ email, password }) => authService.signIn(email, password),
    onSuccess: saveCredentials,
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
    retry: false
  });

  return {
    isLoading: mutation.isPending,
    signIn: (variables: MutationVariables) => mutation.mutate(variables),
    isSuccess: mutation.isSuccess,
    isError: mutation.isError
  };
}
