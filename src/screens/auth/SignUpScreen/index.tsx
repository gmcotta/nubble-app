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
import { resetNavigationValues, screenValues } from './constants';
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
  const { reset } = useResetNavigationSuccess({ ...resetNavigationValues });

  function submitForm(formValues: SignUpFormSchema) {
    console.log(formValues);
    reset();
  }

  return (
    <Screen canGoBack scrollable>
      <Text {...S.titleStyles}>{screenValues.title}</Text>
      <FormTextInput
        control={control}
        name="username"
        {...screenValues.usernameInput}
        boxProps={S.usernameInputStyles}
      />
      <FormTextInput
        control={control}
        name="fullName"
        {...screenValues.nameInput}
        boxProps={S.fullNameInputStyles}
      />
      <FormTextInput
        control={control}
        name="email"
        {...screenValues.emailInput}
        boxProps={S.emailInputStyles}
      />
      <FormPasswordInput
        control={control}
        name="password"
        {...screenValues.passwordInput}
        boxProps={S.passwordInputStyles}
      />
      <Button
        title={screenValues.submitButton.title}
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
