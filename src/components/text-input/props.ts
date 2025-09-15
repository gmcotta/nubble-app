import { ReactElement } from 'react';
import { TextInputProps as RNTextInputProps } from 'react-native';
import { RestyleBoxProps } from '../restyle/box/props';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  rightComponent?: ReactElement;
  boxProps?: RestyleBoxProps;
}
