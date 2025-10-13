import { useMutation } from '@tanstack/react-query';
import { authService, AuthSignUpData } from '@domain';
import { MutationOptions } from '@infra';

export function useTanstackQueryImpl(
  options?: MutationOptions<AuthSignUpData>
) {
  const mutation = useMutation<void, Error, AuthSignUpData>({
    mutationFn: signUpData => authService.signUp(signUpData),
    retry: false,
    onSuccess: (_, variables) => {
      if (options?.onSuccess) {
        options.onSuccess(variables);
      }
    },
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    }
  });

  function signUp(signUpData: AuthSignUpData) {
    mutation.mutate(signUpData);
  }

  return {
    isLoading: mutation.isPending,
    signUp
  };
}
