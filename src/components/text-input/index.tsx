import { useRef } from 'react';
import { Pressable, TextInput as RNTextInput } from 'react-native';

import { Box, Text } from '@components';
import { useRestyleTheme } from '@hooks';
import { TextInputProps } from './props';
import * as S from './styles';

export function TextInput({
  label,
  errorMessage = '',
  rightComponent,
  boxProps,
  ...textInputProps
}: TextInputProps) {
  const textInputRef = useRef<RNTextInput>(null);
  const { colors } = useRestyleTheme();

  const focusInput = () => {
    textInputRef.current?.focus();
  };

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Text {...S.labelStyles}>{label}</Text>
        <Box {...S.inputContainerStyles(errorMessage)}>
          <RNTextInput
            ref={textInputRef}
            placeholderTextColor={colors.gray2}
            autoCapitalize="none"
            style={S.textInputStyles}
            {...textInputProps}
          />
          {rightComponent ? (
            <Box {...S.rightComponentContainerStyles}>{rightComponent}</Box>
          ) : null}
        </Box>
        {errorMessage ? (
          <Text {...S.errorMessageTextStyles}>{errorMessage}</Text>
        ) : null}
      </Pressable>
    </Box>
  );
}
