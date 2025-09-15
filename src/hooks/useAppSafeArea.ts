import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRestyleTheme } from './useRestyleTheme';

export function useAppSafeArea() {
  const { top } = useSafeAreaInsets();
  const { spacing } = useRestyleTheme();

  return {
    top: Math.max(top, spacing.s20)
  };
}
