import { useTanstackQueryImpl } from './implementations';
import { UseGetUserByIdResult } from './props';

export function useGetUserById(userId: number): UseGetUserByIdResult {
  return useTanstackQueryImpl(userId);
}
