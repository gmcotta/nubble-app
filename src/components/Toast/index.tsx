import { useEffect } from 'react';

import { useToast, useToastActions } from '@services';
import { ToastContent } from './components/Content';
import * as C from './constants';

export function Toast() {
  const toast = useToast();

  const { hideToast } = useToastActions();

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hideToast();
      }, toast.duration ?? C.TOAST_DEFAULT_DURATION_MS);
    }
  }, [toast, hideToast]);

  if (!toast) return null;

  return <ToastContent toast={toast} />;
}
