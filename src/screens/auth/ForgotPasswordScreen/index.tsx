import { Button } from '../../../components/button';
import { Screen } from '../../../components/screen';
import { Text } from '../../../components/text';
import { TextInput } from '../../../components/text-input';
import { ForgotPasswordScreenProps } from './props';

export function ForgotPasswordScreen({
  navigation
}: ForgotPasswordScreenProps) {
  function submitForm() {
    navigateToSuccessScreen();
  }

  function navigateToSuccessScreen() {
    navigation.navigate('SuccessScreen', {
      title: `Enviamos as\ninstruções para seu\ne-mail`,
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha.',
      icon: {
        name: 'messageRound',
        color: 'primary'
      }
    });
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" marginTop="s24">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" marginTop="s16">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha.
      </Text>
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{
          marginTop: 's32'
        }}
      />
      <Button onPress={submitForm} title="Recuperar senha" marginTop="s48" />
    </Screen>
  );
}
