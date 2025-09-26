/** Trechos comentados são sobre a implementação com context */

import { ToastService } from './props';
// import { useToastContext } from './useToastContext';
import { useToastZustand, useToastActionsZustand } from './useToastZustand';

export function useToast(): ToastService['toast'] {
  // const { toast } = useToastContext();
  // return toast;
  return useToastZustand();
}

export function useToastActions(): Omit<ToastService, 'toast'> {
  // const { showToast, hideToast } = useToastContext();
  // return { showToast, hideToast };
  return useToastActionsZustand();
}
