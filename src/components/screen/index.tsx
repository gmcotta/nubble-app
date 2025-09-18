import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { Box, Icon, Text, TouchableOpacityBox } from '@components';
import { useAppSafeArea, useRestyleTheme } from '@hooks';
import {
  ScrollViewContainer,
  ViewContainer
} from './components/screen-container';
import { screenValues } from './constants';
import { ScreenProps } from './props';
import { $keyboardAvoidingViewStyles } from './styles';

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
      style={$keyboardAvoidingViewStyles}
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
                {screenValues.backButton.title}
              </Text>
            </TouchableOpacityBox>
          ) : null}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
