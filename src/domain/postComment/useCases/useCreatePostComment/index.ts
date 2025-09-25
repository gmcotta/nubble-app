import { useState } from 'react';
import { postCommentService } from '../../postCommentService';
import { Options } from './props';

export function useCreatePostComment(postId: number, options?: Options) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function createPostComment(message: string) {
    setLoading(true);
    try {
      setError(false);
      const postComment = await postCommentService.create(postId, message);
      if (options?.onSuccess) {
        options.onSuccess(postComment);
      }
    } catch (err) {
      if (options?.onError) {
        options.onError('Erro ao criar comentário');
      }
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
