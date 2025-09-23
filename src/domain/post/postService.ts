import { apiAdapter } from '@api';
import { Page } from '@types';
import { postAdapter } from './postAdapter';
import { postApi } from './postApi';
import { Post } from './postTypes';

async function getList(page: number): Promise<Page<Post>> {
  const postListPaginationAPI = await postApi.getList({ page, per_page: 10 });

  const meta = apiAdapter.toPageMetaData(postListPaginationAPI.meta);
  const data = postListPaginationAPI.data.map(d => postAdapter.toPost(d));

  return { meta, data };
}

export const postService = {
  getList
};
