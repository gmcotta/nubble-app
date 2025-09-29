import { useMutation } from '@tanstack/react-query';

import { authService } from '@domain';
import { useAuthCredentialsService } from '@services';
import { UseAuthSignOutResult } from '../props';

export function useTanstackQueryImpl(): UseAuthSignOutResult {
  const { removeCredentials } = useAuthCredentialsService();
  const mutation = useMutation({
    mutationFn: () => authService.signOut(),
    retry: false,
    onSuccess: () => {
      removeCredentials();
    }
  });

  return {
    isLoading: mutation.isPending,
    signOut: () => mutation.mutate()
  };
}
