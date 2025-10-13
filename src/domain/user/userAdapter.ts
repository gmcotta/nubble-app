import { User, UserAPI } from './userTypes';

function toUser(userApi: UserAPI): User {
  return {
    id: userApi.id,
    firstName: userApi.first_name,
    lastName: userApi.last_name,
    fullName: userApi.full_name,
    username: userApi.username,
    email: userApi.email,
    profileUrl: userApi.profile_url,
    isOnline: userApi.is_online
  };
}

export const userAdapter = {
  toUser
};
