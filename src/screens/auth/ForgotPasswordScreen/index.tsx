import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button, FormTextInput, Screen, Text } from '@components';
import { useResetNavigationSuccess } from '@hooks';
import * as C from './constants';
import { ForgotPasswordFormSchema } from './props';
import { forgotPasswordSchema } from './schema';
import * as S from './styles';

export function ForgotPasswordScreen() {
  const { control, formState, handleSubmit } =
    useForm<ForgotPasswordFormSchema>({
      resolver: zodResolver(forgotPasswordSchema),
      defaultValues: {
        email: ''
      },
      mode: 'onChange'
    });
  const { reset } = useResetNavigationSuccess({
    originRoute: 'LoginScreen',
    successScreenParams: {
      title: C.SCREEN_VALUES.SUCCESS_SCREEN_TITLE,
      description: C.SCREEN_VALUES.SUCCESS_SCREEN_DESCRIPTION,
      icon: {
        name: 'messageRound',
        color: 'primary'
      }
    }
  });

  function submitForm(/* formValues: ForgotPasswordFormSchema */) {
    navigateToSuccessScreen();
  }

  function navigateToSuccessScreen() {
    reset();
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
        title={C.SCREEN_VALUES.SUBMIT_BUTTON.TITLE}
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        {...S.buttonStyles}
      />
    </Screen>
  );
}
