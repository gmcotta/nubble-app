import { create } from 'zustand';

import { AuthCredentialsService } from '../authCredentialsTypes';

export const useZustandImpl = create<AuthCredentialsService>(set => ({
  authCredentials: null,
  isLoading: false,
  saveCredentials: async authCredentials => set({ authCredentials }),
  remove: () => set({ authCredentials: null })
}));
