import { TextInputProps } from '../text-input/props';

export type PasswordInputProps = Omit<
  TextInputProps,
  'rightComponent' | 'secureTextEntry'
>;
