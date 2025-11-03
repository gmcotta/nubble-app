import { MutationOptions, useMutation } from '@infra';
import { postCommentService } from '../../../../postComment/postCommentService';
import { MutationVariables, UseRemovePostCommentResult } from '../props';

export function useReactImpl({
  options
}: {
  postId?: number;
  options?: MutationOptions<string>;
}): UseRemovePostCommentResult {
  const mutationFn = ({ postCommentId }: MutationVariables) =>
    postCommentService.remove(postCommentId);

  const { isLoading, isError, mutate } = useMutation<MutationVariables, string>(
    mutationFn,
    options
  );

  return {
    removePostComment: mutate,
    isLoading,
    isError
  };
}
