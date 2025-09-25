import { PostComment } from '@domain';

export interface Options {
  onSuccess?: (data: PostComment) => void;
  onError?: (message: string) => void;
}
