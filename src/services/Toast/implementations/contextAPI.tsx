import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { ToastProps, ToastService } from '../props';

const ToastContext = createContext<ToastService>({
  toast: null,
  showToast: () => null,
  hideToast: () => null
});

export function ToastProvider({ children }: PropsWithChildren) {
  const [toast, setToast] = useState<ToastService['toast']>(null);

  function showToast(newToast: ToastProps) {
    setToast(newToast);
  }

  function hideToast() {
    setToast(null);
  }

  return (
    <ToastContext.Provider value={{ toast, showToast, hideToast }}>
      {children}
    </ToastContext.Provider>
  );
}

function useToastContext(): ToastService {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('Toast must be used within a ToastProvider');
  }

  return context;
}

export function useToastContextAPI(): ToastService['toast'] {
  return useToastContext().toast;
}

export function useToastActionsContextAPI(): Omit<ToastService, 'toast'> {
  const { showToast, hideToast } = useToastContext();
  return { showToast, hideToast };
}
