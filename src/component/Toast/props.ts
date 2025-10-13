import { Animated } from 'react-native';

import { ToastPosition } from '@services';

export interface AnimatedViewStylesProps {
  fadeAnimationValue: Animated.Value;
  position: ToastPosition;
}
