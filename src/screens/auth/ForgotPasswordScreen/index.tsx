import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useToastActionsService } from 'services';
import { Button, FormTextInput, Screen, Text } from '@components';
import { useAuthForgotPassword } from '@domain';
import { useResetNavigationSuccess } from '@hooks';
import * as C from './constants';
import { ForgotPasswordFormSchema } from './props';
import { forgotPasswordSchema, defaultValues } from './schema';
import * as S from './styles';

export function ForgotPasswordScreen() {
  const { control, formState, handleSubmit } =
    useForm<ForgotPasswordFormSchema>({
      resolver: zodResolver(forgotPasswordSchema),
      defaultValues
    });

  const { reset } = useResetNavigationSuccess(C.RESET_PARAMS);
  const { showToast } = useToastActionsService();

  const { isLoading, requestNewPassword } = useAuthForgotPassword({
    onSuccess: () => {
      reset();
    },
    onError: message => {
      showToast({ type: 'error', message });
    }
  });

  function submitForm(formValues: ForgotPasswordFormSchema) {
    requestNewPassword(formValues.email);
  }

  return (
    <Screen canGoBack>
      <Text {...S.titleStyles}>{C.SCREEN_VALUES.TITLE}</Text>
      <Text {...S.descriptionStyles}>{C.SCREEN_VALUES.DESCRIPTION}</Text>
      <FormTextInput
        control={control}
        name="email"
        boxProps={S.textInputStyles}
        {...C.SCREEN_VALUES.EMAIL_INPUT}
      />
      <Button
        loading={isLoading}
        title={C.SCREEN_VALUES.SUBMIT_BUTTON.TITLE}
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        {...S.buttonStyles}
      />
    </Screen>
  );
}
