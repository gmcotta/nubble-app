import { api, PageAPI } from '@api';
import { UserAPI } from './userTypes';

async function getById(userId: number): Promise<UserAPI> {
  const response = await api.get<UserAPI>(`/users/${userId}`);
  return response.data;
}

async function getList(search?: string): Promise<PageAPI<UserAPI>> {
  const response = await api.get<PageAPI<UserAPI>>('/users', {
    params: {
      search
    }
  });
  return response.data;
}

export const userApi = {
  getById,
  getList
};
