import {
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  SpacingProps,
  SpacingShorthandProps
} from '@shopify/restyle';
import { TouchableOpacityProps } from 'react-native';

import { Theme } from '@theme';

export type TouchableOpacityBoxProps = TouchableOpacityProps &
  BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme>;
