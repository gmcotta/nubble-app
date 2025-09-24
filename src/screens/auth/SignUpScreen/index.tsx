import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text
} from '@components';
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
      fullName: '',
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

  function submitForm(/* formValues: SignUpFormSchema */) {
    reset();
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
        name="fullName"
        {...C.SCREEN_VALUES.NAME_INPUT}
        boxProps={S.fullNameInputStyles}
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
        title={C.SCREEN_VALUES.SUBMIT_BUTTON.TITLE}
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
