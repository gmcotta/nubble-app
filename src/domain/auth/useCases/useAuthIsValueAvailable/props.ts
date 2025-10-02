import { QueryKeys } from 'infra';

export interface UseAuthIsValueAvailableParams {
  value: string;
  queryFn: (value: string) => Promise<boolean>;
  queryKey: QueryKeys;
  enabled: boolean;
}

export type UseAuthIsValueAvailableImplParams = Omit<
  UseAuthIsValueAvailableParams,
  'queryFn' | 'queryKey'
>;

export interface UseAuthIsValueAvailableReturn {
  isUnavailable: boolean;
  isFetching: boolean;
}
