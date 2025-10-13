import { TextProps, TouchableOpacityBoxProps } from '@components';
import { ThemeColors } from '@theme';

export const buttonContainerStyles: TouchableOpacityBoxProps = {
  paddingHorizontal: 's20',
  height: 50,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 's16'
};

export function buttonTextStyles(color: ThemeColors): TextProps {
  return {
    preset: 'paragraphMedium',
    bold: true,
    color
  };
}
