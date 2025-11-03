import { useMutation, useQueryClient } from '@tanstack/react-query';

import { MutationOptions, QueryKeys } from '@infra';
import { ImageForUpload, multimediaService } from '@services';
import { postService } from '../postService';
import { Post } from '../postTypes';

export function usePostCreate(options?: MutationOptions<Post>) {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError } = useMutation<
    Post,
    unknown,
    { text: string; imageCover: ImageForUpload }
  >({
    mutationFn: ({ text, imageCover }) =>
      postService.createPost(text, imageCover),
    onSuccess: post => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.PostList] });

      if (options?.onSuccess) {
        options.onSuccess(post);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options.errorMessage || 'Erro ao criar post.');
      }
    }
  });

  async function createPost({
    text,
    imageUri
  }: {
    text: string;
    imageUri: string;
  }) {
    const imageCover = await multimediaService.prepareImageForUpload(imageUri);
    if (!imageCover) {
      return;
    }
    mutate({ text, imageCover });
  }

  return {
    createPost,
    isLoading: isPending,
    isError
  };
}
