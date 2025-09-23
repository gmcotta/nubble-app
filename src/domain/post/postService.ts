import { postAdapter } from './postAdapter';
import { postApi } from './postApi';
import { Post } from './postTypes';

async function getList(): Promise<Post[]> {
  const postListPaginationAPI = await postApi.getList();
  const postList = postListPaginationAPI.data.map(data =>
    postAdapter.toPost(data)
  );
  return postList;
}

export const postService = {
  getList
};
