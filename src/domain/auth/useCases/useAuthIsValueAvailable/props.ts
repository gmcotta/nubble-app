export interface UseAuthIsValueAvailableParams {
  username: string;
  enabled: boolean;
}

export interface UseAuthIsValueAvailableReturn {
  isUnavailable: boolean;
  isFetching: boolean;
}
