import { useMutation } from '@tanstack/react-query';

import { authService } from '@domain';
import { UseAuthSignOutResult } from '../props';

export function useTanstackQueryImpl(): UseAuthSignOutResult {
  const mutation = useMutation({
    mutationFn: () => authService.signOut(),
    retry: false
  });

  return {
    isLoading: mutation.isPending,
    signOut: () => mutation.mutate()
  };
}
