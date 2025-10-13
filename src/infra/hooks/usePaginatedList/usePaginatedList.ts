import { Page } from '@types';
import { useTanstackQueryImpl } from './implementations';
import { UsePaginatedListQueryOptions, UsePaginatedListResult } from './props';

export function usePaginatedList<Data>(
  getList: (page: number) => Promise<Page<Data>>,
  _options?: UsePaginatedListQueryOptions
): UsePaginatedListResult<Data> {
  return useTanstackQueryImpl(getList, _options);
}
