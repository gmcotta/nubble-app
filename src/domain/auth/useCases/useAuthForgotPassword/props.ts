export interface UseAuthForgotPasswordResult {
  isLoading: boolean;
  requestNewPassword: (variable: string) => void;
}
