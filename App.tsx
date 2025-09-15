import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from './src/components/text';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { View } from 'react-native';
import { Button } from './src/components/button';
import { TextInput } from './src/components/text-input';
import { Icon } from './src/components/icon';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView>
          <View style={{ paddingHorizontal: 24 }}>
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
            <Text
              color="primary"
              preset="paragraphSmall"
              bold
              marginBottom="s40"
            >
              Esqueci minha senha
            </Text>
            <Button title="Entrar" marginBottom="s12" />
            <Button variant="outline" title="Criar uma conta" />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
