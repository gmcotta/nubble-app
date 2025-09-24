import { useEffect, useState } from 'react';
import { Page } from 'types';

export function usePaginatedList<Data>(
  getList: (page: number) => Promise<Page<Data>>
) {
  const [currentData, setCurrentData] = useState<Data[]>([]);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);

  async function fetchInitialData() {
    setLoading(true);
    try {
      setError(false);
      const { meta, data } = await getList(1);
      setCurrentData(data);

      if (meta.hasNextPage) {
        setHasNextPage(true);
        setPage(2);
      } else {
        setHasNextPage(false);
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function fetchData() {
    setLoading(true);
    try {
      setError(false);
      const { meta, data } = await getList(page);
      setCurrentData(old => [...old, ...data]);
      if (meta.hasNextPage) {
        setPage(old => old + 1);
      } else {
        setHasNextPage(false);
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  function fetchNextPage() {
    if (loading || !hasNextPage) return;
    fetchData();
  }

  useEffect(() => {
    fetchInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- chama apenas uma vez
  }, []);

  return {
    data: currentData,
    loading,
    error,
    refresh: fetchInitialData,
    fetchNextPage
  };
}
