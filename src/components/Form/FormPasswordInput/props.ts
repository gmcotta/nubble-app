import { FieldValues, UseControllerProps } from 'react-hook-form';

import { PasswordInputProps } from '@components';

export type FormPasswordInputProps<T extends FieldValues> = PasswordInputProps &
  UseControllerProps<T>;
