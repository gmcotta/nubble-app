import { User } from '@domain';

export interface UseGetUserByIdResult {
  user: User | undefined;
  error: boolean;
  loading: boolean;
  refetch?: () => void;
  isFetching?: boolean;
}
