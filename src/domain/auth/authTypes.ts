import { User, UserAPI } from '@domain';

export interface AuthSignInAPI {
  auth: {
    type: string;
    token: string;
  };

  user: UserAPI;
}

export interface AuthSignUpDataAPI {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface AuthSignUpData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface AuthSignOutAPI {
  message: string;
}

export interface AuthCredentials {
  token: string;
  user: User;
}
