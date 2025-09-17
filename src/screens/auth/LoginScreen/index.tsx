import { Alert, Pressable } from 'react-native';
import { useForm } from 'react-hook-form';

import { Button } from '../../../components/button';
import { Screen } from '../../../components/screen';
import { Text } from '../../../components/text';
import { FormPasswordInput } from '../../../components/form/form-password-input';
import { FormTextInput } from '../../../components/form/form-text-input';
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
      <FormPasswordInput
        control={control}
        name="password"
        rules={{
          required: 'Senha obrigatória',
          minLength: {
            value: 8,
            message: 'Senha deve ter no mínimo 8 caracteres'
          }
        }}
        {...screenValues.passwordInput}
        boxProps={{ marginBottom: 's10' }}
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
