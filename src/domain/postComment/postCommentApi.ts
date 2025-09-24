import { api, PageAPI, PaginationParams } from '@api';
import { PostCommentAPI } from './postCommentTypes';

async function getList(
  postId: number,
  pageParams: PaginationParams
): Promise<PageAPI<PostCommentAPI>> {
  const response = await api.get<PageAPI<PostCommentAPI>>(
    '/user/post_comment',
    {
      params: {
        post_id: postId,
        ...pageParams
      }
    }
  );

  return response.data;
}

export const postCommentApi = {
  getList
};
