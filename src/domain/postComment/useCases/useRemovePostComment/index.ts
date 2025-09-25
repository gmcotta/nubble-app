import { postCommentService } from '@domain';
import { MutationOptions, useMutation } from '@infra';
import { MutationVariables } from './props';

export function useRemovePostComment(options?: MutationOptions<string>) {
  const mutationFn = ({ postCommentId }: MutationVariables) =>
    postCommentService.remove(postCommentId);

  const { loading, error, mutate } = useMutation<MutationVariables, string>(
    mutationFn,
    options
  );

  return {
    loading,
    error,
    removePostComment: mutate
  };
}
