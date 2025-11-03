import { MutationOptions, useMutation } from '@infra';
import { postCommentService } from '../../../../postComment/postCommentService';
import { PostComment } from '../../../../postComment/postCommentTypes';
import { MutationVariables, UseCreatePostCommentResult } from '../props';

export function useReactImpl(
  postId: number,
  options?: MutationOptions<PostComment>
): UseCreatePostCommentResult {
  const mutationFn = ({ message }: MutationVariables) =>
    postCommentService.create(postId, message);

  const { mutate, isLoading, isError } = useMutation<
    MutationVariables,
    PostComment
  >(mutationFn, options);

  return {
    createPostComment: mutate,
    isLoading,
    isError
  };
}
