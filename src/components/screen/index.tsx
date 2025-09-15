import { Box } from '../restyle/box';
import { useAppSafeArea } from '../../hooks/useAppSafeArea';
import { ScreenProps } from './props';
import { Icon } from '../icon';
import { Text } from '../text';

export function Screen({ children, canGoBack = false }: ScreenProps) {
  const { top } = useAppSafeArea();

  return (
    <Box paddingHorizontal="s24" style={{ paddingTop: top }}>
      {canGoBack ? (
        <Box marginBottom="s24" flexDirection="row" alignItems="center">
          <Icon name="arrowLeft" color="primary" />
          <Text marginLeft="s8" preset="paragraphMedium" bold>
            Voltar
          </Text>
        </Box>
      ) : null}
      {children}
    </Box>
  );
}
