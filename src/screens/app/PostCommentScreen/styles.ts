import { StyleProp, ViewStyle } from 'react-native';

export function flatListContentStyles(bottom: number): StyleProp<ViewStyle> {
  return {
    paddingBottom: bottom
  };
}
