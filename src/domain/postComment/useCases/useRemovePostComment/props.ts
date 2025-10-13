export interface MutationVariables {
  postCommentId: number;
}

export interface UseRemovePostCommentResult {
  removePostComment: (variables: MutationVariables) => void;
  isError: boolean;
  isLoading: boolean;
}
