import { MutationOptions } from '@infra';
import { useTanstackQueryImpl } from './implementations';
import { UseRemovePostCommentResult } from './props';

export function useRemovePostComment({
  postId,
  options
}: {
  postId: number;
  options?: MutationOptions<string>;
}): UseRemovePostCommentResult {
  return useTanstackQueryImpl({ options, postId });
}
