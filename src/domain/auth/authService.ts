import { AuthCredentials } from '@domain';
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

export const authService = {
  signIn,
  signOut
};
