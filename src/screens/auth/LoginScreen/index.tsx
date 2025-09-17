import { Alert, Pressable } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import { Text } from '../../../components/text';
import { Button } from '../../../components/button';
import { TextInput } from '../../../components/text-input';
import { Screen } from '../../../components/screen';
import { PasswordInput } from '../../../components/password-input';
import { LoginFormFields, LoginScreenProps } from './props';
import { screenValues } from './constants';

export function LoginScreen({ navigation }: LoginScreenProps) {
  const { control, formState, handleSubmit } = useForm<LoginFormFields>({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onChange'
  });

  function submitForm({ email, password }: LoginFormFields) {
    Alert.alert('Teste', `email: ${email}, senha: ${password}`);
  }

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <Screen>
      <Text preset="headingLarge" marginBottom="s8">
        {screenValues.title}
      </Text>
      <Text preset="paragraphLarge" marginBottom="s40">
        {screenValues.description}
      </Text>
      <Controller
        control={control}
        name="email"
        rules={{
          required: 'E-mail obrigatório',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'E-mail inválido'
          }
        }}
        render={({ field, fieldState }) => (
          <TextInput
            {...screenValues.emailInput}
            boxProps={{ marginBottom: 's20' }}
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
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
            boxProps={{ marginBottom: 's10' }}
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Pressable onPress={navigateToForgotPasswordScreen}>
        <Text color="primary" preset="paragraphSmall" bold marginBottom="s40">
          {screenValues.forgotPassword.text}
        </Text>
      </Pressable>
      <Button
        title={screenValues.submitButton.title}
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        marginBottom="s12"
      />
      <Button
        onPress={navigateToSignUpScreen}
        variant="outline"
        title={screenValues.signUpButtton.title}
      />
    </Screen>
  );
}
