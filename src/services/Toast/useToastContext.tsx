import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { ToastProps, ToastService } from './props';

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

export function useToastContext() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('Toast must be used withina a ToastProvider');
  }

  return context;
}
