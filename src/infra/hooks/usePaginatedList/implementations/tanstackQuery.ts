import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { Page } from '@types';
import { UsePaginatedListQueryOptions, UsePaginatedListResult } from '../props';

export function useTanstackQueryImpl<Data>(
  getList: (page: number) => Promise<Page<Data>>,
  options?: UsePaginatedListQueryOptions
): UsePaginatedListResult<Data> {
  if (!options) throw new Error('Implementation needs options parameter.');

  const [data, setData] = useState<Data[]>([]);

  const query = useInfiniteQuery<Page<Data>>({
    queryKey: options?.queryKey ?? [],
    // TODO: Achar um jeito de tipar corretamente
    queryFn: ({ pageParam = 1 }) => getList(pageParam as number),
    initialPageParam: 1,
    getNextPageParam: ({ meta }) =>
      meta.hasNextPage ? meta.currentPage + 1 : null,
    enabled: options?.enabled,
    staleTime: options?.staleTime
  });

  useEffect(() => {
    if (query.data) {
      const newList = query.data.pages.reduce<Data[]>((prev, current) => {
        return [...prev, ...current.data];
      }, []);
      setData(newList);
    }
  }, [query.data]);

  function refresh() {
    // TODO: Achar um jeito de tipar de acordo com o contrato.
    return query.refetch() as unknown as Promise<void>;
  }

  return {
    data,
    isError: query.isError,
    isLoading: query.isLoading,
    hasNextPage: !!query.hasNextPage,
    fetchNextPage: query.fetchNextPage,
    refresh
  };
}
