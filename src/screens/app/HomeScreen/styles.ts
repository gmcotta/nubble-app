import { StyleProp, ViewStyle } from 'react-native';

import { ScreenProps } from '@components';

export function flatListContentStyles(length: number): StyleProp<ViewStyle> {
  return {
    flex: length === 0 ? 1 : 0
  };
}

export function screenStyles(top: number): ScreenProps['style'] {
  return {
    paddingHorizontal: 0,
    paddingBottom: 0,
    paddingTop: top,
    flex: 1
  };
}
