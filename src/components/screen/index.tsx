import { Box } from '../restyle/box';
import { useAppSafeArea } from '../../hooks/useAppSafeArea';
import { ScreenProps } from './props';

export function Screen({ children }: ScreenProps) {
  const { top } = useAppSafeArea();

  return (
    <Box paddingHorizontal="s24" style={{ paddingTop: top }}>
      {children}
    </Box>
  );
}
