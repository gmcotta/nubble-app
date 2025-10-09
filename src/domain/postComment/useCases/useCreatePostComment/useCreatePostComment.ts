import { PostComment } from '@domain';
import { MutationOptions } from '@infra';
import { useTanstackQueryImpl } from './implementations';
import { UseCreatePostCommentResult } from './props';

export function useCreatePostComment(
  postId: number,
  options?: MutationOptions<PostComment>
): UseCreatePostCommentResult {
  return useTanstackQueryImpl(postId, options);
}
