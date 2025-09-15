import { Text } from '../../../components/text';
import { Button } from '../../../components/button';
import { TextInput } from '../../../components/text-input';
import { Icon } from '../../../components/icon';
import { Screen } from '../../../components/screen';

export function LoginScreen() {
  return (
    <Screen>
      <Text preset="headingLarge" marginBottom="s8">
        Olá!
      </Text>
      <Text preset="paragraphLarge" marginBottom="s40">
        Digite seu e-mail e senha para entrar
      </Text>
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        errorMessage="Mensagem de erro"
        boxProps={{
          marginBottom: 's20'
        }}
      />
      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        rightComponent={<Icon name="eyeOn" color="gray2" />}
        boxProps={{
          marginBottom: 's10'
        }}
      />
      <Text color="primary" preset="paragraphSmall" bold marginBottom="s40">
        Esqueci minha senha
      </Text>
      <Button title="Entrar" marginBottom="s12" />
      <Button variant="outline" title="Criar uma conta" />
    </Screen>
  );
}
