import { KeyboardAvoidingView, Platform } from 'react-native';

import { Box } from '@components';
import { useAppSafeArea, useRestyleTheme } from '@hooks';
import { ScrollViewContainer, ViewContainer, ScreenHeader } from './components';
import { ScreenProps } from './props';
import * as S from './styles';

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  title = '',
  style,
  headerComponent,
  ...boxProps
}: ScreenProps) {
  const { top, bottom } = useAppSafeArea();
  const { colors } = useRestyleTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={S.keyboardAvoidingViewStyles}
    >
      <Container backgroundColor={colors.background}>
        <Box
          {...S.initialboxStyles}
          style={[{ paddingTop: top, paddingBottom: bottom }, style]}
          {...boxProps}
        >
          {canGoBack ? (
            <ScreenHeader title={title} headerComponent={headerComponent} />
          ) : null}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
