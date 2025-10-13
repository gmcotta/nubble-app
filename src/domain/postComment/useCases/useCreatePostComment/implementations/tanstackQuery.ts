import { useMutation, useQueryClient } from '@tanstack/react-query';

import { PostComment, postCommentService } from '@domain';
import { MutationOptions, QueryKeys } from '@infra';
import { MutationVariables, UseCreatePostCommentResult } from '../props';

export function useTanstackQueryImpl(
  postId: number,
  options?: MutationOptions<PostComment>
): UseCreatePostCommentResult {
  const queryClient = useQueryClient();

  const mutation = useMutation<PostComment, unknown, MutationVariables>({
    mutationFn: ({ message }) => postCommentService.create(postId, message),
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
    createPostComment: variables => mutation.mutate(variables),
    isError: mutation.isError,
    isLoading: mutation.isPending
  };
}
