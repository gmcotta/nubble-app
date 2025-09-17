import { Controller, FieldValues } from 'react-hook-form';

import { TextInput } from '../../text-input';
import { FormTextInputProps } from './props';

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...textInputProps
}: FormTextInputProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextInput
          {...textInputProps}
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message}
        />
      )}
    />
  );
}
