import { QueryKeys, usePaginatedList } from '@infra';
import { userService } from '../userService';

export function useUserSearch(search: string) {
  return usePaginatedList(() => userService.searchUser(search), {
    queryKey: [QueryKeys.UserList, search],
    enabled: search.length > 0,
    staleTime: 30 * 1000
  });
}
