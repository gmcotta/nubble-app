import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { storage } from '@services';
import { SearchHistoryService } from '../searchHistoryTypes';

export const useSearchHistoryStore = create<SearchHistoryService>()(
  persist(
    (set, get) => ({
      userList: [],
      addUser: user => {
        const userList = get().userList;

        const isUserInList = userList.find(item => item.id === user.id);
        if (isUserInList) return;

        const newList = [...userList, user];
        set({ userList: newList });
      },
      removeUser: userId => {
        const userList = get().userList;
        const newList = userList.filter(user => user.id !== userId);
        set({ userList: newList });
      },
      clearUserList: () => {
        set({ userList: [] });
      }
    }),
    {
      name: '@SearchHistory',
      storage
    }
  )
);

export function useZustandImpl(): SearchHistoryService['userList'] {
  const userList = useSearchHistoryStore(store => store.userList);
  return userList;
}

export function useZustandActionsImpl(): Omit<
  SearchHistoryService,
  'userList'
> {
  const addUser = useSearchHistoryStore(store => store.addUser);
  const removeUser = useSearchHistoryStore(store => store.removeUser);
  const clearUserList = useSearchHistoryStore(store => store.clearUserList);

  return { addUser, removeUser, clearUserList };
}
