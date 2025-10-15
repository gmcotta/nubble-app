import { http, HttpResponse } from 'msw';

import { BASE_URL, PageAPI } from '@api';
import { USER_API_PATH, UserAPI } from '@domain';
import { userMockedData } from './mocks';

const FULL_URL = `${BASE_URL}${USER_API_PATH}`;

export const userHandlers = [
  http.get<never, never, PageAPI<UserAPI>>(FULL_URL, async () => {
    const response = userMockedData.mockedUserResponse;
    return HttpResponse.json(response, { status: 200 });
  }),
  http.get<{ userId: string }>(`${FULL_URL}/:userId`, async ({ params }) => {
    const { userId } = params;
    const userAPI = userMockedData.userList.find(
      user => user.id.toString() === userId
    );
    return HttpResponse.json(userAPI, { status: 200 });
  })
];
