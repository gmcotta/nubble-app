import { ThemeColors } from '../../theme/theme';
import { TouchableOpacityBoxProps } from '../restyle/touchable-opacity-box/props';

export type ButtonVariants = 'primary' | 'outline';

export type ButtonModifiers = {
  default: ButtonUI;
  disabled: ButtonUI;
};

export interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}

export interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  variant?: ButtonVariants;
  disabled?: boolean;
}
