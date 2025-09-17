import { FieldValues, UseControllerProps } from 'react-hook-form';
import { TextInputProps } from '../../text-input/props';

export type FormTextInputProps<T extends FieldValues> = TextInputProps &
  UseControllerProps<T>;
