import { ViewProps } from 'react-native';

import { AnimatedViewStylesProps } from './props';

export function animatedViewStyles({
  fadeAnimationValue,
  position
}: AnimatedViewStylesProps): ViewProps {
  return {
    style: {
      position: 'absolute',
      alignSelf: 'center',
      opacity: fadeAnimationValue,
      [position]: 100
    }
  };
}
