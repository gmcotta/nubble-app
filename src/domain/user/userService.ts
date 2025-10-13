import { apiAdapter } from '@api';
import { Page } from '@types';
import { userAdapter } from './userAdapter';
import { userApi } from './userApi';
import { User } from './userTypes';

async function getById(userId: number): Promise<User> {
  const userAPI = await userApi.getById(userId);
  const user = userAdapter.toUser(userAPI);
  return user;
}

async function searchUser(search: string): Promise<Page<User>> {
  const userPaginationAPI = await userApi.getList(search);

  return apiAdapter.toPageModel(userPaginationAPI, userAdapter.toUser);
}

export const userService = {
  getById,
  searchUser
};
