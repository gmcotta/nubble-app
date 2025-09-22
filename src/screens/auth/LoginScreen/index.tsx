import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Pressable } from 'react-native';

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text
} from '@components';
import { screenValues } from './constants';
import { LoginFormSchema, LoginScreenProps } from './props';
import { loginSchema } from './schema';
import * as S from './styles';

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
      <Text {...S.titleStyles}>{screenValues.title}</Text>
      <Text {...S.descriptionStyles}>{screenValues.description}</Text>
      <FormTextInput
        control={control}
        name="email"
        boxProps={S.textInputStyles}
        {...screenValues.emailInput}
      />
      <FormPasswordInput
        control={control}
        name="password"
        boxProps={S.passwordInputStyles}
        {...screenValues.passwordInput}
      />
      <Pressable onPress={navigateToForgotPasswordScreen}>
        <Text {...S.forgotPasswordTextStyles}>
          {screenValues.forgotPassword.text}
        </Text>
      </Pressable>
      <Button
        title={screenValues.submitButton.title}
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        {...S.loginButtonStyles}
      />
      <Button
        onPress={navigateToSignUpScreen}
        title={screenValues.signUpButtton.title}
        {...S.signUpButtonStyles}
      />
    </Screen>
  );
}
