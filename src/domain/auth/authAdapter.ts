import { AuthCredentials, AuthCredentialsAPI, userAdapter } from '@domain';

function toAuthCredentials(authSignInAPI: AuthCredentialsAPI): AuthCredentials {
  return {
    token: authSignInAPI.auth.token,
    refreshToken: authSignInAPI.auth.refreshToken,
    expires_at: authSignInAPI.auth.expires_at,
    user: userAdapter.toUser(authSignInAPI.user)
  };
}

export const authAdapter = {
  toAuthCredentials
};
