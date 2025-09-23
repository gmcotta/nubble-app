import { useEffect, useState } from 'react';
import { postService } from '../postService';
import { Post } from '../postTypes';

export function usePostList() {
  const [postList, setPostList] = useState<Post[]>([]);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchInitialData() {
    setLoading(true);
    try {
      setError(false);
      const list = await postService.getList(1);
      setPostList(list);
      setPage(2);
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
      const list = await postService.getList(page);
      setPostList(old => [...old, ...list]);
      setPage(old => old + 1);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  function fetchNextPage() {
    if (loading) return;
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
