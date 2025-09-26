import { ToastService } from './props';
import { useToastContext } from './useToastContext';

export function useToast(): ToastService {
  const { toast, showToast, hideToast } = useToastContext();

  return {
    toast,
    showToast,
    hideToast
  };
}
