export type ToastType = 'success' | 'error';
export type ToastPosition = 'top' | 'bottom';

export interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  position?: ToastPosition;
  action?: {
    title: string;
    onPress: () => {};
  };
}

export interface ToastService {
  toast: ToastProps | null;
  showToast: (toast: ToastProps) => void;
  hideToast: () => void;
}
