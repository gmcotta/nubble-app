import { zodResolver } from '@hookform/resolvers/zod';
import { ERROR_MESSAGES } from '@validations/constants';
import { useForm } from 'react-hook-form';

import {
  ActivityIndicator,
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text
} from '@components';
import { useAuthIsValueAvailable, useAuthSignUp } from '@domain';
import {
  useResetNavigationSuccess,
  UseResetNavigationSuccessProps
} from '@hooks';
import * as C from './constants';
import { SignUpFormSchema } from './props';
import { signUpSchema } from './schema';
import * as S from './styles';

const resetProps: UseResetNavigationSuccessProps = {
  originRoute: 'LoginScreen',
  successScreenParams: {
    title: C.SCREEN_VALUES.SUCCESS_SCREEN_TITLE,
    description: C.SCREEN_VALUES.SUCCESS_SCREEN_DESCRIPTION,
    icon: {
      name: 'checkRound',
      color: 'primary'
    }
  }
};

const defaultValues = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: ''
};

export function SignUpScreen() {
  const { control, formState, handleSubmit, watch, getFieldState } =
    useForm<SignUpFormSchema>({
      resolver: zodResolver(signUpSchema),
      defaultValues,
      mode: 'onChange'
    });

  const { reset } = useResetNavigationSuccess(resetProps);

  const { signUp, isLoading } = useAuthSignUp({
    onSuccess: () => {
      reset();
    }
  });

  const username = watch('username');
  const usernameState = getFieldState('username');
  const isUsernameValid = !usernameState.invalid && usernameState.isDirty;
  const usernameQuery = useAuthIsValueAvailable({
    username,
    enabled: isUsernameValid
  });

  function submitForm(formValues: SignUpFormSchema) {
    signUp(formValues);
  }

  const isSubmitButtonDisabled =
    !formState.isValid ||
    usernameQuery.isFetching ||
    usernameQuery.isUnavailable;

  return (
    <Screen canGoBack scrollable>
      <Text {...S.titleStyles}>{C.SCREEN_VALUES.TITLE}</Text>
      <FormTextInput
        control={control}
        name="username"
        {...C.SCREEN_VALUES.USERNAME_INPUT}
        boxProps={S.usernameInputStyles}
        errorMessage={
          usernameQuery.isUnavailable
            ? ERROR_MESSAGES.USERNAME.UNAVAILABLE
            : undefined
        }
        rightComponent={
          usernameQuery.isFetching ? (
            <ActivityIndicator size="small" />
          ) : undefined
        }
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
        disabled={isSubmitButtonDisabled}
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
