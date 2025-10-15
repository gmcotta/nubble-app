import { useZustandImpl, useZustandActionsImpl } from './implementations';
import { SearchHistoryService } from './searchHistoryTypes';

export function useSearchHistoryService(): SearchHistoryService['userList'] {
  return useZustandImpl();
}

export function useSearchHistoryActionsService(): Omit<
  SearchHistoryService,
  'userList'
> {
  return useZustandActionsImpl();
}
