import { PageAPI } from '@api';
import { PostAPI } from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  const response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer Mw.j8qze1ztmXtczWqpA6HZUYVynMc_HeHJJ_OjrwEj_qBNVGbNwHGCc9TtAm0z'
    }
  });

  const data: PageAPI<PostAPI> = await response.json();
  return data;
}

export const postApi = {
  getList
};
