export interface MutationVariables {
  email: string;
  password: string;
}

export interface UseAuthSignInResult {
  isLoading: boolean;
  signIn: (variables: MutationVariables) => void;
}
