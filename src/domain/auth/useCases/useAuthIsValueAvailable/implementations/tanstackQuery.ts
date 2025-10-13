import { useQuery } from '@tanstack/react-query';

import { useDebounce } from '@hooks';
import {
  UseAuthIsValueAvailableParams,
  UseAuthIsValueAvailableReturn
} from '../props';

export function useTanstackQueryImpl({
  value,
  enabled,
  queryFn,
  queryKey
}: UseAuthIsValueAvailableParams): UseAuthIsValueAvailableReturn {
  const debouncedValue = useDebounce(value, 1500);

  const { data, isFetching } = useQuery({
    queryKey: [queryKey, debouncedValue],
    queryFn: () => queryFn(debouncedValue),
    retry: false,
    staleTime: 20000,
    enabled: enabled && debouncedValue.length > 0
  });

  const isDebouncing = debouncedValue !== value;

  return {
    isUnavailable: data === false,
    isFetching: isFetching || isDebouncing
  };
}
