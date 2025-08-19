import { TouchableOpacity } from 'react-native';
import {
  createRestyleComponent,
  backgroundColor,
  spacing,
  spacingShorthand,
  layout,
  border,
} from '@shopify/restyle';

import { Theme } from '../../../theme/theme';
import { TouchableOpacityBoxProps } from './props';

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity,
);
