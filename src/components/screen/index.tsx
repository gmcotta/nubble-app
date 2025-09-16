import { KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useAppSafeArea } from '../../hooks/useAppSafeArea';
import { useRestyleTheme } from '../../hooks/useRestyleTheme';
import { Icon } from '../icon';
import { Box } from '../restyle/box';
import { TouchableOpacityBox } from '../restyle/touchable-opacity-box';
import { Text } from '../text';
import {
  ScrollViewContainer,
  ViewContainer
} from './components/screen-container';
import { ScreenProps } from './props';

export function Screen({
  children,
  canGoBack = false,
  scrollable = false
}: ScreenProps) {
  const navigation = useNavigation();
  const { top, bottom } = useAppSafeArea();
  const { colors } = useRestyleTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  function handleGoBack() {
    navigation.goBack();
  }

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
            <TouchableOpacityBox
              marginBottom="s24"
              onPress={handleGoBack}
              flexDirection="row"
              alignItems="center"
            >
              <Icon name="arrowLeft" color="primary" />
              <Text marginLeft="s8" preset="paragraphMedium" bold>
                Voltar
              </Text>
            </TouchableOpacityBox>
          ) : null}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
