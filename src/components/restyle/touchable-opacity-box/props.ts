import { TouchableOpacityProps } from 'react-native';
import {
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  SpacingProps,
  SpacingShorthandProps
} from '@shopify/restyle';

import { Theme } from '@theme';

export type TouchableOpacityBoxProps = TouchableOpacityProps &
  BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme>;
