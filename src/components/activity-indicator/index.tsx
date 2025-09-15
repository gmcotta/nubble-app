import { ActivityIndicator as RNActivityIndicator } from 'react-native';

import { ActivityIndicatorProps } from './props';
import { useAppTheme } from '../../hooks/useAppTheme';

export function ActivityIndicator({
  color,
  ...activityIndicatorProps
}: ActivityIndicatorProps) {
  const { colors } = useAppTheme();
  return (
    <RNActivityIndicator color={colors[color]} {...activityIndicatorProps} />
  );
}
