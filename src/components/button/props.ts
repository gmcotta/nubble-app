import { TouchableOpacityBoxProps } from '../restyle/touchable-opacity-box/props';

export interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
}
