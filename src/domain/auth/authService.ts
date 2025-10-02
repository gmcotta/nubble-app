import { api } from '@api';
import { AuthCredentials, AuthSignUpData } from '@domain';
import { authAdapter } from './authAdapter';
import { authApi } from './authApi';

async function signIn(
  email: string,
  password: string
): Promise<AuthCredentials> {
  try {
    const responseApi = await authApi.signIn(email, password);
    return authAdapter.toAuthCredentials(responseApi);
  } catch (err) {
    throw new Error('E-mail ou senha inválida.');
  }
}

async function signOut() {
  try {
    const responseApi = await authApi.signOut();
    return responseApi.message;
  } catch (err) {
    throw new Error('Erro ao fazer logout...');
  }
}

async function signUp(data: AuthSignUpData) {
  await authApi.signUp(data);
}

function updateToken(token: string) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function removeToken() {
  api.defaults.headers.common.Authorization = null;
}

async function isUsernameAvailable(username: string): Promise<boolean> {
  const { isAvailable } = await authApi.isUsernameAvailable({ username });
  return isAvailable;
}

async function isEmailAvailable(email: string): Promise<boolean> {
  const { isAvailable } = await authApi.isEmailAvailable({ email });
  return isAvailable;
}

async function forgotPassword(email: string): Promise<string> {
  const response = await authApi.forgotPassword({ email });
  return response.message;
}

export const authService = {
  signIn,
  signOut,
  signUp,
  updateToken,
  removeToken,
  isUsernameAvailable,
  isEmailAvailable,
  forgotPassword
};
