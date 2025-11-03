import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from '@infra';
import { userService } from '../../../../user/userService';

export function useTanstackQueryImpl(userId: number) {
  const query = useQuery({
    queryKey: [QueryKeys.GetUserById, userId],
    queryFn: () => userService.getById(userId),
    staleTime: 30 * 1000 // 30 segundos
  });

  return {
    user: query.data,
    isError: query.isError,
    isLoading: query.isLoading,
    refetch: query.refetch,
    isFetching: query.isFetching
  };
}
