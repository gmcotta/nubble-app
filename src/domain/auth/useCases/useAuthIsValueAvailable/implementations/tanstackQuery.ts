import { useQuery } from '@tanstack/react-query';

import { authService } from '@domain';
import { useDebounce } from '@hooks';
import { QueryKeys } from '@infra';
import {
  UseAuthIsValueAvailableParams,
  UseAuthIsValueAvailableReturn
} from '../props';

export function useTanstackQueryImpl({
  username,
  enabled
}: UseAuthIsValueAvailableParams): UseAuthIsValueAvailableReturn {
  const debouncedUsername = useDebounce(username, 1500);
  const { data, isFetching } = useQuery({
    queryKey: [QueryKeys.isUsernameAvailable, debouncedUsername],
    queryFn: () => authService.isUsernameAvailable(debouncedUsername),
    retry: false,
    staleTime: 20000,
    enabled: enabled && debouncedUsername.length > 0
  });

  const isDebouncing = debouncedUsername !== username;

  return {
    isUnavailable: data === false,
    isFetching: isFetching || isDebouncing
  };
}
