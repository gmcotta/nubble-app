import { User, UserAPI } from '../user/userTypes';

export interface AuthCredentialsAPI {
  auth: {
    type: string;
    token: string;
    refreshToken: string;
    expires_at: string;
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
  refreshToken: string;
  expires_at: string;
}

export interface FieldIsAvailableAPI {
  message: string;
  isAvailable: boolean;
}

export interface ForgotPasswordAPI {
  message: string;
}
