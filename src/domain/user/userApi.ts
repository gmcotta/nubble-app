import { api, PageAPI } from '@api';
import { UserAPI } from './userTypes';

export const USER_API_PATH = '/users';

async function getById(userId: number): Promise<UserAPI> {
  const response = await api.get<UserAPI>(`${USER_API_PATH}/${userId}`);
  return response.data;
}

async function getList(search: string): Promise<PageAPI<UserAPI>> {
  const response = await api.get<PageAPI<UserAPI>>(`${USER_API_PATH}`, {
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
