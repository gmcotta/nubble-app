import { FieldValues, UseControllerProps } from 'react-hook-form';

import { TextInputProps } from '@components';

export type FormTextInputProps<T extends FieldValues> = TextInputProps &
  UseControllerProps<T>;
