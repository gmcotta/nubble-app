import { ActivityIndicator as RNActivityIndicator } from 'react-native';

import { useRestyleTheme } from '@hooks';

import { ActivityIndicatorProps } from './props';

export function ActivityIndicator({
  color = 'primary',
  ...activityIndicatorProps
}: ActivityIndicatorProps) {
  const { colors } = useRestyleTheme();
  return (
    <RNActivityIndicator color={colors[color]} {...activityIndicatorProps} />
  );
}
