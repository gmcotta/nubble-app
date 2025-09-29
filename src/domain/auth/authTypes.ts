import { User, UserAPI } from '@domain';

export interface AuthSignInAPI {
  auth: {
    type: string;
    token: string;
  };

  user: UserAPI;
}

export interface AuthSignOutAPI {
  message: string;
}

export interface AuthCredentials {
  token: string;
  user: User;
}
