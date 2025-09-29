import { useMutation } from '@tanstack/react-query';

import { useAuthCredentialsService } from 'services';
import { AuthCredentials, authService } from '@domain';
import { MutationOptions } from '@infra';
import { MutationVariables } from '../props';

export function useTanstackQueryImpl(
  options?: MutationOptions<AuthCredentials>
) {
  const { saveCredentials } = useAuthCredentialsService();
  const mutation = useMutation<AuthCredentials, Error, MutationVariables>({
    mutationFn: ({ email, password }) => authService.signIn(email, password),
    onSuccess: authCredentials => {
      authService.updateToken(authCredentials.token);
      saveCredentials(authCredentials);
    },
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
