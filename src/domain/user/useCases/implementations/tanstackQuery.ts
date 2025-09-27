import { useQuery } from '@tanstack/react-query';

import { userService } from '@domain';
import { QueryKeys } from '@infra';

export function useTanstackQueryImpl(userId: number) {
  const query = useQuery({
    queryKey: [QueryKeys.GetUserById, userId],
    queryFn: () => userService.getById(userId),
    staleTime: 30 * 1000 // 30 segundos
  });

  return {
    user: query.data,
    error: query.isError,
    loading: query.isLoading,
    refetch: query.refetch,
    isFetching: query.isFetching
  };
}
