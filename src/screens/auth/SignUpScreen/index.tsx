import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  ActivityIndicator,
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text
} from '@components';
import {
  useAuthIsUsernameAvailable,
  useAuthIsEmailAvailable,
  useAuthSignUp
} from '@domain';
import { useResetNavigationSuccess } from '@hooks';
import { ERROR_MESSAGES } from '@validations';
import * as C from './constants';
import { useGetValueQuery } from './hooks';
import { SignUpFormSchema } from './props';
import { defaultValues, signUpSchema } from './schema';
import * as S from './styles';

export function SignUpScreen() {
  const { control, formState, handleSubmit, watch, getFieldState } =
    useForm<SignUpFormSchema>({
      resolver: zodResolver(signUpSchema),
      defaultValues,
      mode: 'onChange'
    });

  const { reset } = useResetNavigationSuccess(C.RESET_PROPS);

  const { signUp, isLoading } = useAuthSignUp({
    onSuccess: () => {
      reset();
    }
  });

  const usernameQuery = useGetValueQuery({
    fieldName: 'username',
    watch,
    getFieldState,
    queryHook: useAuthIsUsernameAvailable,
    errorMessage: ERROR_MESSAGES.USERNAME.UNAVAILABLE
  });

  const emailQuery = useGetValueQuery({
    fieldName: 'email',
    watch,
    getFieldState,
    queryHook: useAuthIsEmailAvailable,
    errorMessage: ERROR_MESSAGES.EMAIL.UNAVAILABLE
  });

  function submitForm(formValues: SignUpFormSchema) {
    signUp(formValues);
  }

  const isSubmitButtonDisabled =
    !formState.isValid || usernameQuery.isNotReady || emailQuery.isNotReady;

  return (
    <Screen canGoBack scrollable>
      <Text {...S.titleStyles}>{C.SCREEN_VALUES.TITLE}</Text>
      <FormTextInput
        control={control}
        name="username"
        {...C.SCREEN_VALUES.USERNAME_INPUT}
        boxProps={S.usernameInputStyles}
        errorMessage={usernameQuery.errorMessage}
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
        errorMessage={emailQuery.errorMessage}
        rightComponent={
          emailQuery.isFetching ? <ActivityIndicator size="small" /> : undefined
        }
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
