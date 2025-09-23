import { useEffect, useState } from 'react';
import { postService } from '../postService';
import { Post } from '../postTypes';

export function usePostList() {
  const [postList, setPostList] = useState<Post[]>([]);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);

  async function fetchInitialData() {
    setLoading(true);
    try {
      setError(false);
      const { meta, data } = await postService.getList(1);
      setPostList(data);

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
      const { meta, data } = await postService.getList(page);
      setPostList(old => [...old, ...data]);
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
  }, []);

  return {
    postList,
    loading,
    error,
    refresh: fetchInitialData,
    fetchNextPage
  };
}
