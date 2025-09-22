import { useRef } from 'react';
import { Pressable, TextInput as RNTextInput } from 'react-native';

import { Box, Text } from '@components';
import { useRestyleTheme } from '@hooks';
import { TextInputProps } from './props';
import { $textInputContainer, $textInputStyle } from './styles';

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
        <Text marginBottom="s4" preset="paragraphMedium">
          {label}
        </Text>
        <Box {...$textInputContainer(errorMessage)}>
          <RNTextInput
            ref={textInputRef}
            placeholderTextColor={colors.gray2}
            autoCapitalize="none"
            style={$textInputStyle}
            {...textInputProps}
          />
          {rightComponent ? <Box marginLeft="s16">{rightComponent}</Box> : null}
        </Box>
        {errorMessage ? (
          <Text preset="paragraphSmall" color="error" bold>
            {errorMessage}
          </Text>
        ) : null}
      </Pressable>
    </Box>
  );
}
