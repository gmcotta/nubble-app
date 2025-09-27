import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MutationOptions, QueryKeys } from 'infra';
import { postCommentService } from 'domain/postComment/postCommentService';
import { MutationVariables, UseRemovePostCommentResult } from '../props';

export function useTanstackQueryImpl({
  postId,
  options
}: {
  postId: number;
  options?: MutationOptions<string>;
}): UseRemovePostCommentResult {
  const queryClient = useQueryClient();

  const mutation = useMutation<string, unknown, MutationVariables>({
    mutationFn: ({ postCommentId }) => postCommentService.remove(postCommentId),
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PostCommentList, postId]
      });
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options.errorMessage ?? '');
      }
    }
  });

  return {
    removePostComment: variables => mutation.mutate(variables),
    isError: mutation.isError,
    isLoading: mutation.isPending
  };
}
