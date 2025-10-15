import {
  createRestyleComponent,
  backgroundColor,
  spacing,
  spacingShorthand,
  layout,
  border
} from '@shopify/restyle';
import { Pressable as RNPressable } from 'react-native';

import { Theme } from '@theme';
import { PressableBoxProps } from './props';

export const PressableBox = createRestyleComponent<PressableBoxProps, Theme>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  RNPressable
);
