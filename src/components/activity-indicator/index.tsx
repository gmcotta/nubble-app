import { ActivityIndicator as RNActivityIndicator } from 'react-native';
import { useTheme } from '@shopify/restyle';

import { ActivityIndicatorProps } from './props';
import { Theme } from '../../theme/theme';

export function ActivityIndicator({
  color,
  ...activityIndicatorProps
}: ActivityIndicatorProps) {
  const { colors } = useTheme<Theme>();
  return (
    <RNActivityIndicator color={colors[color]} {...activityIndicatorProps} />
  );
}
