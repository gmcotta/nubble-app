import { api } from '@api';
import { AuthSignInAPI, AuthSignOutAPI } from './authTypes';

async function signIn(email: string, password: string): Promise<AuthSignInAPI> {
  const response = await api.post('/login', {
    email,
    password
  });
  return response.data;
}

async function signOut(): Promise<AuthSignOutAPI> {
  const response = await api.get('/profile/logout');
  return response.data;
}

export const authApi = {
  signIn,
  signOut
};
