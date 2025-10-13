import { api, PageAPI, PaginationParams } from '@api';
import { PostAPI } from './postTypes';

async function getList(params: PaginationParams): Promise<PageAPI<PostAPI>> {
  const response = await api.get<PageAPI<PostAPI>>('/user/post', {
    params
  });

  return response.data;
}

export const postApi = {
  getList
};
