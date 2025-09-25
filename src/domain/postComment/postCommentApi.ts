import { api, PageAPI, PaginationParams } from '@api';
import { PostCommentAPI, PostCommentDeleteAPI } from './postCommentTypes';

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

async function create(
  post_id: number,
  message: string
): Promise<PostCommentAPI> {
  const response = await api.post<PostCommentAPI>('/user/post_comment', {
    post_id,
    message
  });

  return response.data;
}

async function remove(post_comment_id: number): Promise<PostCommentDeleteAPI> {
  const response = await api.delete<PostCommentDeleteAPI>(
    `/user/post_comment/${post_comment_id}`
  );
  return response.data;
}

export const postCommentApi = {
  getList,
  create,
  remove
};
