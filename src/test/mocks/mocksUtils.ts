import { UserAPI, AuthCredentials, userAdapter } from '@domain';

const mateusUserAPI: UserAPI = {
  id: 7,
  first_name: 'Mateus',
  last_name: 'de Souza',
  username: 'mateussouza',
  email: 'msouza@coffstack.com',
  profile_url:
    'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/8-mateus.png',
  is_online: false,
  full_name: 'Mateus de Souza',
  temp_token: null,
  remember_me_token: null,
  temp_token_created_at: null,
  remember_me_token_created_at: null
};

export const mateusAuthCredentials: AuthCredentials = {
  token: 'access-token',
  expires_at: '2030-10-07T12:08:50.433+00:00',
  refreshToken: 'refresh-token',
  user: userAdapter.toUser(mateusUserAPI)
};

export const mockUtils = {
  mateusUserAPI,
  mateusAuthCredentials
};
