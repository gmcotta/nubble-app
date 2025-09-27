// import { useReactImpl } from './implementations/react';
import { useTanstackQueryImpl } from './implementations/tanstackQuery';

export function useGetUserById(userId: number) {
  return useTanstackQueryImpl(userId);
}
