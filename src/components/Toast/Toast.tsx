import { useEffect } from 'react';
import { Animated } from 'react-native';

import { useToastService, useToastActionsService } from '@services';
import { useAnimation } from './animation';
import { ToastContent } from './components';
import * as C from './constants';
import * as S from './styles';

export function Toast() {
  const toast = useToastService();
  const { hideToast } = useToastActionsService();
  const { fadeAnimation } = useAnimation();

  const position = toast?.position ?? 'top';

  useEffect(() => {
    if (toast) {
      fadeAnimation.startIn();

      setTimeout(() => {
        fadeAnimation.startOut(hideToast);
      }, toast.duration ?? C.TOAST_DEFAULT_DURATION_MS);
    }
  }, [toast, hideToast, fadeAnimation]);

  if (!toast) return null;

  return (
    <Animated.View
      testID="toast-message"
      {...S.animatedViewStyles({
        fadeAnimationValue: fadeAnimation.value,
        position
      })}
    >
      <ToastContent toast={toast} />
    </Animated.View>
  );
}
