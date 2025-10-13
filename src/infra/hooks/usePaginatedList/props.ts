export interface UsePaginatedListQueryOptions {
  queryKey: ReadonlyArray<unknown>;
  enabled?: boolean;
  staleTime?: number;
}

export interface UsePaginatedListResult<Data> {
  data: Data[];
  isLoading: boolean;
  isError: boolean;
  hasNextPage: boolean;
  refresh: () => Promise<void>;
  fetchNextPage: () => void;
}
