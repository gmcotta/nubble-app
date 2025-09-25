import { useState } from 'react';
import { postCommentService } from '../postCommentService';

export function useCreatePostComment(postId: number) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function createPostComment(message: string) {
    setLoading(true);
    try {
      setError(false);
      await postCommentService.create(postId, message);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {
    createPostComment,
    loading,
    error
  };
}
