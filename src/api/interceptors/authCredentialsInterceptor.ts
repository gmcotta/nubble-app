import { AxiosError, InternalAxiosRequestConfig } from 'axios';

import { AuthCredentialsService } from '@services';
import { authApi } from '../../domain/auth/authApi';
import { authService } from '../../domain/auth/authService';
import { api } from '../apiConfig';

export function registerAuthCredentialsInterceptor({
  authCredentials,
  removeCredentials,
  saveCredentials
}: Omit<AuthCredentialsService, 'isLoading' | 'userId'>) {
  const interceptor = api.interceptors.response.use(
    response => response,
    async (responseError: AxiosError) => {
      if (responseError.response?.status === 401) {
        const failedRequest = responseError.config as
          | InternalAxiosRequestConfig<any> & { sent: boolean };

        const hasNotRefreshToken = !authCredentials?.refreshToken;
        const isRefreshTokenRequest =
          authApi.isRefreshTokenRequest(failedRequest);
        if (hasNotRefreshToken || isRefreshTokenRequest || failedRequest.sent) {
          removeCredentials();
          return Promise.reject(responseError);
        }

        failedRequest.sent = true;

        const newAuthCredentials = await authService.authenticateByRefreshToken(
          authCredentials.refreshToken
        );
        saveCredentials(newAuthCredentials);

        failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;

        return api(failedRequest);
      }
    }
  );

  return () => {
    api.interceptors.response.eject(interceptor);
  };
}
