import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text
} from '@components';
import { useAuthSignUp } from '@domain';
import { useResetNavigationSuccess } from '@hooks';
import * as C from './constants';
import { SignUpFormSchema } from './props';
import { signUpSchema } from './schema';
import * as S from './styles';

export function SignUpScreen() {
  const { control, formState, handleSubmit } = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    mode: 'onChange'
  });
  const { reset } = useResetNavigationSuccess({
    originRoute: 'LoginScreen',
    successScreenParams: {
      title: C.SCREEN_VALUES.SUCCESS_SCREEN_TITLE,
      description: C.SCREEN_VALUES.SUCCESS_SCREEN_DESCRIPTION,
      icon: {
        name: 'checkRound',
        color: 'primary'
      }
    }
  });

  const { signUp, isLoading } = useAuthSignUp({
    onSuccess: () => {
      reset();
    }
  });

  function submitForm(formValues: SignUpFormSchema) {
    signUp(formValues);
  }

  return (
    <Screen canGoBack scrollable>
      <Text {...S.titleStyles}>{C.SCREEN_VALUES.TITLE}</Text>
      <FormTextInput
        control={control}
        name="username"
        {...C.SCREEN_VALUES.USERNAME_INPUT}
        boxProps={S.usernameInputStyles}
      />
      <FormTextInput
        control={control}
        name="firstName"
        {...C.SCREEN_VALUES.FIRST_NAME_INPUT}
        boxProps={S.nameInputStyles}
      />
      <FormTextInput
        control={control}
        name="lastName"
        {...C.SCREEN_VALUES.LAST_NAME_INPUT}
        boxProps={S.nameInputStyles}
      />
      <FormTextInput
        control={control}
        name="email"
        {...C.SCREEN_VALUES.EMAIL_INPUT}
        boxProps={S.emailInputStyles}
      />
      <FormPasswordInput
        control={control}
        name="password"
        {...C.SCREEN_VALUES.PASSWORD_INPUT}
        boxProps={S.passwordInputStyles}
      />
      <Button
        loading={isLoading}
        title={C.SCREEN_VALUES.SUBMIT_BUTTON.TITLE}
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
