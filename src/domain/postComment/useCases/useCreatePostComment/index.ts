import { PostComment } from '@domain';
import { MutationOptions, useMutation } from '@infra';
import { postCommentService } from '../../postCommentService';
import { MutationVariables } from './props';

export function useCreatePostComment(
  postId: number,
  options?: MutationOptions<PostComment>
) {
  const mutationFn = ({ message }: MutationVariables) =>
    postCommentService.create(postId, message);

  const { mutate, loading, error } = useMutation<
    MutationVariables,
    PostComment
  >(mutationFn, options);

  return {
    createPostComment: mutate,
    loading,
    error
  };
}
