import { cloneDeep } from 'lodash';
import { http, HttpResponse } from 'msw';

import { BASE_URL, PageAPI } from '@api';
import { PostCommentAPI, POST_COMMENT_API_PATH } from '@domain';
import { postCommentMockedData } from './mocks';

const FULL_URL = `${BASE_URL}${POST_COMMENT_API_PATH}`;
let inMemoryResponse = cloneDeep(
  postCommentMockedData.mockedPostCommentResponse
);

export function resetInMemoryResponse() {
  inMemoryResponse = cloneDeep(postCommentMockedData.mockedPostCommentResponse);
}

export const postCommentHandlers = [
  http.get<never, never, PageAPI<PostCommentAPI>>(FULL_URL, async () => {
    return HttpResponse.json(inMemoryResponse, {
      status: 200
    });
  }),
  http.post<never, { post_id: number; message: string }>(
    FULL_URL,
    async ({ request }) => {
      const body = await request.json();

      const newPostCommentAPI: PostCommentAPI = {
        ...postCommentMockedData.postCommentAPI,
        id: 2,
        post_id: body.post_id,
        message: body.message
      };

      inMemoryResponse.data = [newPostCommentAPI, ...inMemoryResponse.data];
      inMemoryResponse.meta = {
        ...inMemoryResponse.meta,
        total: inMemoryResponse.meta.total + 1
      };

      return HttpResponse.json(newPostCommentAPI, { status: 201 });
    }
  ),
  http.delete<{ postCommentId: string }>(
    `${FULL_URL}/:postCommentId`,
    async ({ params }) => {
      const { postCommentId } = params;

      inMemoryResponse.data = inMemoryResponse.data.filter(item => {
        return item.id.toString() !== postCommentId;
      });
      inMemoryResponse.meta = {
        ...inMemoryResponse.meta,
        total: inMemoryResponse.meta.total - 1
      };

      return HttpResponse.json({ message: 'removed' }, { status: 200 });
    }
  )
];
