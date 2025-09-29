import { create } from 'zustand';

import { ToastService } from '../props';

export const useToastStore = create<ToastService>(set => ({
  toast: null,
  showToast: toast => set({ toast }),
  hideToast: () => set({ toast: null })
}));

export function useToastZustand(): ToastService['toast'] {
  return useToastStore(store => store.toast);
}

export function useToastActionsZustand(): Omit<ToastService, 'toast'> {
  const showToast = useToastStore(store => store.showToast);
  const hideToast = useToastStore(store => store.hideToast);

  return { showToast, hideToast };
}
