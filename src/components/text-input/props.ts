import { ReactElement } from 'react';
import { TextInputProps as RNTextInputProps } from 'react-native';

import { RestyleBoxProps } from '@components';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  rightComponent?: ReactElement;
  boxProps?: RestyleBoxProps;
}
