import { useForm } from 'react-hook-form';

import { Button } from '../../../components/button';
import { FormTextInput } from '../../../components/form/form-text-input';
import { Screen } from '../../../components/screen';
import { Text } from '../../../components/text';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';
import { resetNavigationValues, screenValues } from './constants';
import { ForgotPasswordFormFields } from './props';

export function ForgotPasswordScreen() {
  const { control, formState, handleSubmit } =
    useForm<ForgotPasswordFormFields>({
      defaultValues: {
        email: ''
      },
      mode: 'onChange'
    });
  const { reset } = useResetNavigationSuccess({ ...resetNavigationValues });

  function submitForm() {
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
        rules={{
          required: 'E-mail obrigatório',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'E-mail inválido'
          }
        }}
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
