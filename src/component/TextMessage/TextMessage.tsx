import { useRef } from 'react';
import { Pressable, TextInput as RNTextInput } from 'react-native';

import { Box, Text } from '@components';
import { useRestyleTheme } from '@hooks';
import * as C from './constants';
import { TextMessageProps } from './props';
import * as S from './styles';

export function TextMessage({
  onPressSend,
  value,
  ...rnTextInputProps
}: TextMessageProps) {
  const inputRef = useRef<RNTextInput>(null);

  const { colors } = useRestyleTheme();

  function focusInput() {
    inputRef.current?.focus();
  }

  const isSendButtonDisabled = value?.trim().length === 0;

  return (
    <Pressable onPressIn={focusInput}>
      <Box {...S.inputContainerStyles}>
        <RNTextInput
          ref={inputRef}
          value={value}
          placeholderTextColor={colors.gray2}
          style={S.inputContentStyles(colors.gray1)}
          {...rnTextInputProps}
        />
        <Pressable onPress={onPressSend} disabled={isSendButtonDisabled}>
          <Text color={isSendButtonDisabled ? 'gray2' : 'primary'} bold>
            {C.SCREEN_VALUES.SEND_BUTTON.TITLE}
          </Text>
        </Pressable>
      </Box>
    </Pressable>
  );
}
