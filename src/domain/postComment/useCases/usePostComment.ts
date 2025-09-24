import { usePaginatedList } from 'domain/hooks/usePaginatedList';
import { postCommentService } from '../postCommentService';
import { PostComment } from '../postCommentTypes';

export function usePostCommandList(postId: number) {
  function getList(page: number) {
    return postCommentService.getList(postId, page);
  }

  return usePaginatedList<PostComment>(getList);
}
