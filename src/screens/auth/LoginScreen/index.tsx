import { Pressable } from 'react-native';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text
} from '@components';
import { LoginFormSchema, LoginScreenProps } from './props';
import { screenValues } from './constants';
import { loginSchema } from './schema';

export function LoginScreen({ navigation }: LoginScreenProps) {
  const { control, formState, handleSubmit } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onChange'
  });

  function submitForm(fieldValues: LoginFormSchema) {
    console.log(fieldValues);
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
        {...screenValues.emailInput}
        boxProps={{ marginBottom: 's20' }}
      />
      <FormPasswordInput
        control={control}
        name="password"
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
