import { ActivityIndicator as RNActivityIndicator } from 'react-native';

import { ActivityIndicatorProps } from './props';
import { useRestyleTheme } from '../../hooks/useRestyleTheme';

export function ActivityIndicator({
  color,
  ...activityIndicatorProps
}: ActivityIndicatorProps) {
  const { colors } = useRestyleTheme();
  return (
    <RNActivityIndicator color={colors[color]} {...activityIndicatorProps} />
  );
}
