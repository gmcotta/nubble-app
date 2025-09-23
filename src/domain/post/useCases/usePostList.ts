import { useEffect, useState } from 'react';
import { postService } from '../postService';
import { Post } from '../postTypes';

export function usePostList() {
  const [postList, setPostList] = useState<Post[]>([]);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      setError(false);
      const list = await postService.getList(page);
      setPage(old => old + 1);
      setPostList(old => [...old, ...list]);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  function fetchNextPage() {
    if (!loading) {
      fetchData();
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- chama apenas uma vez
  }, []);

  return {
    postList,
    loading,
    error,
    refetch: fetchData,
    fetchNextPage
  };
}
