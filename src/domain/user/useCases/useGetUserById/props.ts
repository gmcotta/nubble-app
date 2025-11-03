import { User } from '../../userTypes';

export interface UseGetUserByIdResult {
  user: User | undefined;
  isError: boolean;
  isLoading: boolean;
  refetch?: () => void;
  isFetching?: boolean;
}
