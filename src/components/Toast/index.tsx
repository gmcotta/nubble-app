import { useEffect } from 'react';
import { Animated } from 'react-native';

import { useToast, useToastActions } from '@services';
import { useAnimation } from './animation';
import { ToastContent } from './components';
import * as C from './constants';
import * as S from './styles';

export function Toast() {
  const toast = useToast();
  const { hideToast } = useToastActions();
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
      {...S.animatedViewStyles({
        fadeAnimationValue: fadeAnimation.value,
        position
      })}
    >
      <ToastContent toast={toast} />
    </Animated.View>
  );
}
