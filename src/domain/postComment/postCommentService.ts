import { apiAdapter } from '@api';
import { Page } from '@types';
import { postCommentAdapter } from './postCommentAdapter';
import { postCommentApi } from './postCommentApi';
import { PostComment } from './postCommentTypes';

async function getList(
  postId: number,
  page: number
): Promise<Page<PostComment>> {
  const postCommentListPaginationAPI = await postCommentApi.getList(postId, {
    page,
    per_page: 10
  });

  return apiAdapter.toPageModel(
    postCommentListPaginationAPI,
    postCommentAdapter.toCommentPost
  );
}

async function create(postId: number, message: string): Promise<PostComment> {
  const postCommentAPI = await postCommentApi.create(postId, message);
  const data = postCommentAdapter.toCommentPost(postCommentAPI);

  return data;
}

async function remove(postCommentId: number): Promise<string> {
  const response = await postCommentApi.remove(postCommentId);
  return response.message;
}

function canRemove(
  postComment: PostComment,
  userId: number | null,
  postAuthorId: number
) {
  if (postComment.author.id === userId) return true;
  if (userId === postAuthorId) return true;

  return false;
}

export const postCommentService = {
  getList,
  create,
  remove,
  canRemove
};
