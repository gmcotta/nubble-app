import { Button } from '../../../components/button';
import { Screen } from '../../../components/screen';
import { Text } from '../../../components/text';
import { TextInput } from '../../../components/text-input';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';
import { resetNavigationValues, screenValues } from './constants';

export function ForgotPasswordScreen() {
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
      <TextInput boxProps={{ marginTop: 's32' }} {...screenValues.emailInput} />
      <Button
        onPress={submitForm}
        title={screenValues.submitButton.title}
        marginTop="s48"
      />
    </Screen>
  );
}
