import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useRestyleTheme } from './useRestyleTheme';

export function useAppSafeArea() {
  const { top, bottom } = useSafeAreaInsets();
  const { spacing } = useRestyleTheme();

  return {
    top: Math.max(top, spacing.s20),
    bottom: Math.max(bottom, spacing.s20)
  };
}
