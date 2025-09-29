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
import { useAuthSignIn } from '@domain';
import { useToastActions } from '@services';
import * as C from './constants';
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
  const { showToast } = useToastActions();
  const { signIn, isLoading } = useAuthSignIn({
    onError: message => {
      showToast({
        type: 'error',
        message
      });
    }
  });

  function submitForm(fieldValues: LoginFormSchema) {
    signIn(fieldValues);
  }

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <Screen>
      <Text {...S.titleStyles}>{C.SCREEN_VALUES.TITLE}</Text>
      <Text {...S.descriptionStyles}>{C.SCREEN_VALUES.DESCRIPTION}</Text>
      <FormTextInput
        control={control}
        name="email"
        boxProps={S.textInputStyles}
        {...C.SCREEN_VALUES.EMAIL_INPUT}
      />
      <FormPasswordInput
        control={control}
        name="password"
        boxProps={S.passwordInputStyles}
        {...C.SCREEN_VALUES.PASSWORD_INPUT}
      />
      <Pressable onPress={navigateToForgotPasswordScreen}>
        <Text {...S.forgotPasswordTextStyles}>
          {C.SCREEN_VALUES.FORGOT_PASSWORD.text}
        </Text>
      </Pressable>
      <Button
        loading={isLoading}
        title={C.SCREEN_VALUES.SUBMIT_BUTTON.TITLE}
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        {...S.loginButtonStyles}
      />
      <Button
        onPress={navigateToSignUpScreen}
        title={C.SCREEN_VALUES.SIGNUP_BUTTON.TITLE}
        {...S.signUpButtonStyles}
      />
    </Screen>
  );
}
