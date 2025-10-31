import { apiAdapter } from '@api';
import { ImageForUpload } from '@services';
import { Page } from '@types';
import { postAdapter } from './postAdapter';
import { postApi } from './postApi';
import { Post } from './postTypes';

async function getList(page: number): Promise<Page<Post>> {
  const postListPaginationAPI = await postApi.getList({ page, per_page: 10 });

  return apiAdapter.toPageModel(postListPaginationAPI, postAdapter.toPost);
}

async function createPost(
  text: string,
  postImage: ImageForUpload
): Promise<Post> {
  const postDataAPI = await postApi.createPost(text, postImage);
  return postAdapter.toPost(postDataAPI);
}

export const postService = {
  getList,
  createPost
};
