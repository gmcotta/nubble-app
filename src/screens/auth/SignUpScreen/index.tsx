import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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
      <Text preset="headingLarge" marginBottom="s32">
        {screenValues.title}
      </Text>
      <FormTextInput
        control={control}
        name="username"
        {...screenValues.usernameInput}
        boxProps={{ marginBottom: 's20' }}
      />
      <FormTextInput
        control={control}
        name="fullName"
        {...screenValues.nameInput}
        boxProps={{ marginBottom: 's20' }}
      />
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
        boxProps={{ marginBottom: 's48' }}
      />
      <Button
        title={screenValues.submitButton.title}
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
