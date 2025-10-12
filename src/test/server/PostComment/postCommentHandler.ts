import { cloneDeep } from 'lodash';
import { http, HttpResponse } from 'msw';

import { BASE_URL, PageAPI } from '@api';
import { PostCommentAPI, POST_COMMENT_ENDPOINT } from '@domain';
import { mockedData } from './mocks';

const POST_COMMENT_URL = `${BASE_URL}${POST_COMMENT_ENDPOINT}`;
let inMemoryResponse = cloneDeep(mockedData.mockedPostCommentResponse);

export function resetInMemoryResponse() {
  inMemoryResponse = cloneDeep(mockedData.mockedPostCommentResponse);
}

export const postCommentHandlers = [
  http.get<never, never, PageAPI<PostCommentAPI>>(
    POST_COMMENT_URL,
    async () => {
      return HttpResponse.json(inMemoryResponse, {
        status: 200
      });
    }
  ),
  http.post<never, { post_id: number; message: string }>(
    POST_COMMENT_URL,
    async ({ request }) => {
      const body = await request.json();

      const newPostCommentAPI: PostCommentAPI = {
        ...mockedData.postCommentAPI,
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
    `${POST_COMMENT_URL}/:postCommentId`,
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
