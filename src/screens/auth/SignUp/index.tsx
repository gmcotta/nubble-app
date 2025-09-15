import { Button } from '../../../components/button';
import { Icon } from '../../../components/icon';
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
      <TextInput
        boxProps={{ marginBottom: 's48' }}
        label="Senha"
        placeholder="#"
        rightComponent={<Icon name="eyeOn" />}
      />
      <Button title="Criar uma conta" onPress={submitForm} />
    </Screen>
  );
}
