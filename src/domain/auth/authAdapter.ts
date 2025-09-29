import { userAdapter } from 'domain/user/userAdapter';
import { AuthCredentials, AuthSignInAPI } from '@domain';

function toAuthCredentials(authSignInAPI: AuthSignInAPI): AuthCredentials {
  return {
    token: authSignInAPI.auth.token,
    user: userAdapter.toUser(authSignInAPI.user)
  };
}

export const authAdapter = {
  toAuthCredentials
};
