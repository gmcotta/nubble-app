import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps
} from 'react-native';

import { Box } from '../restyle/box';
import { Text } from '../text';
import { $textInputContainer, $textInputStyle } from './styles';
import { useRestyleTheme } from '../../hooks/useRestyleTheme';

interface TextInputProps extends RNTextInputProps {
  label: string;
}

export function TextInput({ label, ...textInputProps }: TextInputProps) {
  const { colors } = useRestyleTheme();

  return (
    <Box>
      <Text marginBottom="s4" preset="paragraphMedium">
        {label}
      </Text>
      <Box {...$textInputContainer}>
        <RNTextInput
          placeholderTextColor={colors.gray2}
          style={$textInputStyle}
          {...textInputProps}
        />
      </Box>
    </Box>
  );
}
