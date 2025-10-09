import { http, HttpResponse } from 'msw';
import { BASE_URL, PageAPI } from '@api';
import { PostCommentAPI, POST_COMMENT_ENDPOINT } from '@domain';

import { mockedData } from './mocks';

export const postCommentHandlers = [
  // TODO: verficar depois a tipagem
  http.get<never, never, PageAPI<PostCommentAPI>>(
    `${BASE_URL}${POST_COMMENT_ENDPOINT}`,
    async () => {
      const response = mockedData.mockedPostCommentResponse;

      return HttpResponse.json(response, {
        status: 200
      });
    }
  )
];
