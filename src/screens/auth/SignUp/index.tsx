import { Button } from '../../../components/button';
import { PasswordInput } from '../../../components/password-input';
import { Screen } from '../../../components/screen';
import { Text } from '../../../components/text';
import { TextInput } from '../../../components/text-input';

export function SignUpScreen() {
  function submitForm() {}

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" marginBottom="s32">
        Criar uma conta
      </Text>
      <TextInput
        boxProps={{ marginBottom: 's20' }}
        label="Seu username"
        placeholder="#"
      />
      <TextInput
        boxProps={{ marginBottom: 's20' }}
        label="Nome completo"
        placeholder="#"
      />
      <TextInput
        boxProps={{ marginBottom: 's20' }}
        label="E-mail"
        placeholder="#"
      />
      <PasswordInput
        boxProps={{ marginBottom: 's48' }}
        label="Senha"
        placeholder="#"
      />
      <Button title="Criar uma conta" onPress={submitForm} />
    </Screen>
  );
}
