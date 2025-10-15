import { api, PageAPI, PaginationParams } from '@api';
import { PostCommentAPI, PostCommentDeleteAPI } from './postCommentTypes';

export const POST_COMMENT_API_PATH = '/user/post_comment';

async function getList(
  postId: number,
  pageParams: PaginationParams
): Promise<PageAPI<PostCommentAPI>> {
  const response = await api.get<PageAPI<PostCommentAPI>>(
    POST_COMMENT_API_PATH,
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
  const response = await api.post<PostCommentAPI>(POST_COMMENT_API_PATH, {
    post_id,
    message
  });

  return response.data;
}

async function remove(post_comment_id: number): Promise<PostCommentDeleteAPI> {
  const response = await api.delete<PostCommentDeleteAPI>(
    `${POST_COMMENT_API_PATH}/${post_comment_id}`
  );
  return response.data;
}

export const postCommentApi = {
  getList,
  create,
  remove
};
