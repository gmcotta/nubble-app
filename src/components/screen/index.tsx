import { KeyboardAvoidingView, Platform } from 'react-native';

import { ScreenProps } from './props';
import { Box } from '../restyle/box';
import { useAppSafeArea } from '../../hooks/useAppSafeArea';
import { Icon } from '../icon';
import { Text } from '../text';
import {
  ScrollViewContainer,
  ViewContainer
} from './components/screen-container';
import { useRestyleTheme } from '../../hooks/useRestyleTheme';

export function Screen({
  children,
  canGoBack = false,
  scrollable = false
}: ScreenProps) {
  const { top, bottom } = useAppSafeArea();
  const { colors } = useRestyleTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={{ paddingTop: top, paddingBottom: bottom }}
        >
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
      </Container>
    </KeyboardAvoidingView>
  );
}
