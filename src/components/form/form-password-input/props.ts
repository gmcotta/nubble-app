import { FieldValues, UseControllerProps } from 'react-hook-form';
import { PasswordInputProps } from '../../password-input/props';

export type FormPasswordInputProps<T extends FieldValues> = PasswordInputProps &
  UseControllerProps<T>;
