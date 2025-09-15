import { useRef } from 'react';
import { Pressable, TextInput as RNTextInput } from 'react-native';

import { Box } from '../restyle/box';
import { Text } from '../text';
import { $textInputContainer, $textInputStyle } from './styles';
import { useRestyleTheme } from '../../hooks/useRestyleTheme';
import { TextInputProps } from './props';

export function TextInput({
  label,
  errorMessage = '',
  ...textInputProps
}: TextInputProps) {
  const textInputRef = useRef<RNTextInput>(null);
  const { colors } = useRestyleTheme();

  const focusInput = () => {
    textInputRef.current?.focus();
  };

  return (
    <Pressable onPress={focusInput}>
      <Box>
        <Text marginBottom="s4" preset="paragraphMedium">
          {label}
        </Text>
        <Box {...$textInputContainer(errorMessage)}>
          <RNTextInput
            ref={textInputRef}
            placeholderTextColor={colors.gray2}
            style={$textInputStyle}
            {...textInputProps}
          />
        </Box>
        {errorMessage ? (
          <Text preset="paragraphSmall" color="error" bold>
            {errorMessage}
          </Text>
        ) : null}
      </Box>
    </Pressable>
  );
}
