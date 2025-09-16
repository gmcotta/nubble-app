import { Text } from '../../../components/text';
import { Button } from '../../../components/button';
import { TextInput } from '../../../components/text-input';
import { Screen } from '../../../components/screen';
import { PasswordInput } from '../../../components/password-input';
import { LoginScreenProps } from './props';
import { Pressable } from 'react-native';

export function LoginScreen({ navigation }: LoginScreenProps) {
  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

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
      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{
          marginBottom: 's10'
        }}
      />
      <Pressable onPress={navigateToForgotPasswordScreen}>
        <Text color="primary" preset="paragraphSmall" bold marginBottom="s40">
          Esqueci minha senha
        </Text>
      </Pressable>
      <Button title="Entrar" marginBottom="s12" />
      <Button
        onPress={navigateToSignUpScreen}
        variant="outline"
        title="Criar uma conta"
      />
    </Screen>
  );
}
