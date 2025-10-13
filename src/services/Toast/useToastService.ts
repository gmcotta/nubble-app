import { useToastZustand, useToastActionsZustand } from './implementations';
import { ToastService } from './props';

export function useToastService(): ToastService['toast'] {
  return useToastZustand();
}

export function useToastActionsService(): Omit<ToastService, 'toast'> {
  return useToastActionsZustand();
}
