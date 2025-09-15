import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from './src/components/text';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { TextInput, View } from 'react-native';
import { Box } from './src/components/restyle/box';
import { Button } from './src/components/button';

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
            <Box marginBottom="s40">
              <TextInput
                placeholder="Digite seu e-mail"
                style={{ height: 50, borderWidth: 1 }}
              />
            </Box>
            <Box marginBottom="s10">
              <TextInput
                placeholder="Digite sua senha"
                style={{ height: 50, borderWidth: 1 }}
              />
            </Box>
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
