import { useQuery } from '@tanstack/react-query';

import { authService } from '@domain';
import { useDebounce } from '@hooks';
import { QueryKeys } from '@infra';
import {
  UseAuthIsValueAvailableParams,
  UseAuthIsValueAvailableReturn
} from '../params';

export function useTanstackQueryImpl({
  username
}: UseAuthIsValueAvailableParams): UseAuthIsValueAvailableReturn {
  const debouncedUsername = useDebounce(username, 1500);
  const { data, isFetching } = useQuery({
    queryKey: [QueryKeys.isUsernameAvailable, debouncedUsername],
    queryFn: () => authService.isUsernameAvailable(debouncedUsername),
    retry: false,
    staleTime: 20000
  });

  return {
    isAvailable: !!data,
    isFetching
  };
}
