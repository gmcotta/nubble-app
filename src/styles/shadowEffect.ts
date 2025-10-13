import { ViewStyle } from 'react-native';

import { palette } from '@theme';

export const shadowProps: ViewStyle = {
  elevation: 20,
  shadowOffset: { width: 0, height: -3 },
  shadowColor: palette.grayBlack,
  shadowOpacity: 0.05,
  shadowRadius: 12
};
