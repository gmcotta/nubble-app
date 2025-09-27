import { useEffect, useState } from 'react';

import { Page } from '@types';
import { UsePaginatedListResult } from '../props';

export function useReactImpl<Data>(
  getList: (page: number) => Promise<Page<Data>>
): UsePaginatedListResult<Data> {
  const [currentData, setCurrentData] = useState<Data[]>([]);

  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);

  async function fetchInitialData() {
    setIsLoading(true);
    try {
      setIsError(false);
      const { meta, data } = await getList(1);
      setCurrentData(data);

      if (meta.hasNextPage) {
        setHasNextPage(true);
        setPage(2);
      } else {
        setHasNextPage(false);
      }
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchData() {
    setIsLoading(true);
    try {
      setIsError(false);
      const { meta, data } = await getList(page);
      setCurrentData(old => [...old, ...data]);
      if (meta.hasNextPage) {
        setPage(old => old + 1);
      } else {
        setHasNextPage(false);
      }
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  function fetchNextPage() {
    if (isLoading || !hasNextPage) return;
    fetchData();
  }

  useEffect(() => {
    fetchInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- chama apenas uma vez
  }, []);

  return {
    data: currentData,
    isLoading,
    isError,
    hasNextPage,
    refresh: fetchInitialData,
    fetchNextPage
  };
}
