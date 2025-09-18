import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button, FormTextInput, Screen, Text } from '@components';
import { useResetNavigationSuccess } from '@hooks';
import { resetNavigationValues, screenValues } from './constants';
import { ForgotPasswordFormSchema } from './props';
import { forgotPasswordSchema } from './schema';

export function ForgotPasswordScreen() {
  const { control, formState, handleSubmit } =
    useForm<ForgotPasswordFormSchema>({
      resolver: zodResolver(forgotPasswordSchema),
      defaultValues: {
        email: ''
      },
      mode: 'onChange'
    });
  const { reset } = useResetNavigationSuccess({ ...resetNavigationValues });

  function submitForm(formValues: ForgotPasswordFormSchema) {
    console.log(formValues);
    navigateToSuccessScreen();
  }

  function navigateToSuccessScreen() {
    reset();
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" marginTop="s24">
        {screenValues.title}
      </Text>
      <Text preset="paragraphLarge" marginTop="s16">
        {screenValues.description}
      </Text>
      <FormTextInput
        control={control}
        name="email"
        boxProps={{ marginTop: 's32' }}
        {...screenValues.emailInput}
      />
      <Button
        title={screenValues.submitButton.title}
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        marginTop="s48"
      />
    </Screen>
  );
}
