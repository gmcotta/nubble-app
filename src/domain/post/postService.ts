import { postAdapter } from './postAdapter';
import { postApi } from './postApi';
import { Post } from './postTypes';

async function getList(page: number): Promise<Post[]> {
  const postListPaginationAPI = await postApi.getList({ page, per_page: 10 });
  const postList = postListPaginationAPI.data.map(data =>
    postAdapter.toPost(data)
  );
  return postList;
}

export const postService = {
  getList
};
