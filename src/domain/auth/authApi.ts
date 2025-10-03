import { AxiosRequestConfig } from 'axios';

import { api } from '@api';
import { UserAPI } from '@domain';
import {
  AuthCredentialsAPI,
  AuthSignOutAPI,
  AuthSignUpDataAPI,
  FieldIsAvailableAPI,
  ForgotPasswordAPI
} from './authTypes';

const REFRESH_TOKEN_URL = '/auth/refresh-token';

async function signIn(
  email: string,
  password: string
): Promise<AuthCredentialsAPI> {
  const response = await api.post('/auth/login', {
    email,
    password
  });
  return response.data;
}

async function signOut(): Promise<AuthSignOutAPI> {
  const response = await api.get('/auth/profile/logout');
  return response.data;
}

async function signUp(data: AuthSignUpDataAPI): Promise<UserAPI> {
  const response = await api.post<UserAPI>('/auth/register', data);
  return response.data;
}

async function authenticateByRefreshToken(
  token: string
): Promise<AuthCredentialsAPI> {
  const response = await api.post<AuthCredentialsAPI>(REFRESH_TOKEN_URL, {
    refreshToken: token
  });
  return response.data;
}

function isRefreshTokenRequest(request: AxiosRequestConfig) {
  const { url } = request;
  return url === REFRESH_TOKEN_URL;
}

async function isUsernameAvailable(params: {
  username: string;
}): Promise<FieldIsAvailableAPI> {
  const response = await api.get('/auth/validate-username', { params });
  return response.data;
}

async function isEmailAvailable(params: {
  email: string;
}): Promise<FieldIsAvailableAPI> {
  const response = await api.get('/auth/validate-email', { params });
  return response.data;
}

async function forgotPassword(params: {
  email: string;
}): Promise<ForgotPasswordAPI> {
  const response = await api.post('/auth/forgot-password', params);
  return response.data;
}

export const authApi = {
  signIn,
  signOut,
  signUp,
  isUsernameAvailable,
  isEmailAvailable,
  forgotPassword,
  authenticateByRefreshToken,
  isRefreshTokenRequest
};
