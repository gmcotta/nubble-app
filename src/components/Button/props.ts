import { TextProps, TouchableOpacityBoxProps } from '@components';
import { ThemeColors } from '@theme';

export type ButtonVariants = 'primary' | 'outline' | 'ghost';

export type ButtonModifiers = {
  default: ButtonUI;
  disabled: ButtonUI;
};

export interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: {
    color: ThemeColors;
    textProps?: TextProps;
  };
}

export interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  variant?: ButtonVariants;
  disabled?: boolean;
}
