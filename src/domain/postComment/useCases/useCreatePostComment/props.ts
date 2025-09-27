export interface MutationVariables {
  message: string;
}

export interface UseCreatePostCommentResult {
  createPostComment: (variables: MutationVariables) => void;
  isError: boolean;
  isLoading: boolean;
}
