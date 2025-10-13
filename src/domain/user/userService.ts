import { userAdapter } from './userAdapter';
import { userApi } from './userApi';
import { User } from './userTypes';

async function getById(userId: number): Promise<User> {
  const userAPI = await userApi.getById(userId);
  const user = userAdapter.toUser(userAPI);
  return user;
}

export const userService = {
  getById
};
