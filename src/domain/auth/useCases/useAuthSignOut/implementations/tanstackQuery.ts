import { useMutation } from '@tanstack/react-query';

import { authService } from '@domain';
import {
  useAuthCredentialsService,
  useSearchHistoryActionsService
} from '@services';
import { UseAuthSignOutResult } from '../props';

export function useTanstackQueryImpl(): UseAuthSignOutResult {
  const { removeCredentials } = useAuthCredentialsService();
  const { clearUserList } = useSearchHistoryActionsService();
  const mutation = useMutation({
    mutationFn: authService.signOut,
    retry: false,
    onSettled: () => {
      removeCredentials();
      clearUserList();
    }
  });

  return {
    isLoading: mutation.isPending,
    signOut: () => mutation.mutate()
  };
}
