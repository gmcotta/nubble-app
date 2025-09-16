import { Button } from '../../../components/button';
import { PasswordInput } from '../../../components/password-input';
import { Screen } from '../../../components/screen';
import { Text } from '../../../components/text';
import { TextInput } from '../../../components/text-input';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';
import { resetNavigationValues, screenValues } from './constants';

export function SignUpScreen() {
  const { reset } = useResetNavigationSuccess({ ...resetNavigationValues });

  function submitForm() {
    reset();
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" marginBottom="s32">
        {screenValues.title}
      </Text>
      <TextInput
        boxProps={{ marginBottom: 's20' }}
        {...screenValues.usernameInput}
      />
      <TextInput
        boxProps={{ marginBottom: 's20' }}
        {...screenValues.nameInput}
      />
      <TextInput
        boxProps={{ marginBottom: 's20' }}
        {...screenValues.emailInput}
      />
      <PasswordInput
        boxProps={{ marginBottom: 's48' }}
        {...screenValues.passwordInput}
      />
      <Button title={screenValues.submitButton.title} onPress={submitForm} />
    </Screen>
  );
}
