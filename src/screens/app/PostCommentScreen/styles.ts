import { StyleProp, ViewStyle } from 'react-native';

import { RestyleBoxProps } from '@components';

export const containerStyles: RestyleBoxProps = {
  flex: 1,
  justifyContent: 'space-between'
};

export function flatListContentStyles(bottom: number): StyleProp<ViewStyle> {
  return {
    paddingBottom: bottom
  };
}
