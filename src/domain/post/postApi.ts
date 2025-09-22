import { postListMock } from './postApiMock';
import { Post } from './types';

async function getList(): Promise<Post[]> {
  await new Promise(resolve => setTimeout(() => resolve('done'), 1000));
  return postListMock;
}

export const postApi = {
  getList
};
