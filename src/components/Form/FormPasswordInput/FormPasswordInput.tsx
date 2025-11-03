import { Controller, FieldValues } from 'react-hook-form';

import { PasswordInput } from '../../PasswordInput/PasswordInput';
import { FormPasswordInputProps } from './props';

export function FormPasswordInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...passwordInputProps
}: FormPasswordInputProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <PasswordInput
          {...passwordInputProps}
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message}
        />
      )}
    />
  );
}
