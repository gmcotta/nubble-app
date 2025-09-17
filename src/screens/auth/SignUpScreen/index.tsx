import { Controller, useForm } from 'react-hook-form';

import { Button } from '../../../components/button';
import { FormTextInput } from '../../../components/form/form-text-input';
import { PasswordInput } from '../../../components/password-input';
import { Screen } from '../../../components/screen';
import { Text } from '../../../components/text';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';
import { resetNavigationValues, screenValues } from './constants';
import { SignUpFormFields } from './props';

export function SignUpScreen() {
  const { control, formState, handleSubmit } = useForm<SignUpFormFields>({
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: ''
    },
    mode: 'onChange'
  });
  const { reset } = useResetNavigationSuccess({ ...resetNavigationValues });

  function submitForm() {
    reset();
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" marginBottom="s32">
        {screenValues.title}
      </Text>
      <FormTextInput
        control={control}
        name="username"
        rules={{
          required: 'Username obrigatório'
        }}
        {...screenValues.usernameInput}
        boxProps={{ marginBottom: 's20' }}
      />
      <FormTextInput
        control={control}
        name="fullName"
        rules={{
          required: 'Nome obrigatório'
        }}
        {...screenValues.nameInput}
        boxProps={{ marginBottom: 's20' }}
      />
      <FormTextInput
        control={control}
        name="email"
        rules={{
          required: 'E-mail obrigatório',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'E-mail inválido'
          }
        }}
        {...screenValues.emailInput}
        boxProps={{ marginBottom: 's20' }}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Senha obrigatória',
          minLength: {
            value: 8,
            message: 'Senha deve ter no mínimo 8 caracteres'
          }
        }}
        render={({ field, fieldState }) => (
          <PasswordInput
            {...screenValues.passwordInput}
            boxProps={{ marginBottom: 's48' }}
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Button
        title={screenValues.submitButton.title}
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
