import { StyleProp, ViewStyle } from 'react-native';

import { ScreenProps } from '@components';

export function flatListContentStyles(length: number): StyleProp<ViewStyle> {
  return {
    flex: length === 0 ? 1 : 0
  };
}

export const screenStyles: ScreenProps['style'] = {
  paddingHorizontal: 0,
  paddingBottom: 0,
  paddingTop: 0,
  flex: 1
};
