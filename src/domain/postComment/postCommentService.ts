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

  const meta = apiAdapter.toPageMetaData(postCommentListPaginationAPI.meta);
  const data = postCommentListPaginationAPI.data.map(d =>
    postCommentAdapter.toCommentPost(d)
  );

  return { meta, data };
}

export const postService = {
  getList
};
