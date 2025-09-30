import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { storage } from '@services';
import { AuthCredentialsService } from '../authCredentialsTypes';

export const useZustandImpl = create<AuthCredentialsService>()(
  persist(
    set => ({
      authCredentials: null,
      isLoading: false,
      saveCredentials: async authCredentials => set({ authCredentials }),
      removeCredentials: () => set({ authCredentials: null })
    }),
    {
      name: '@Auth',
      storage
    }
  )
);
