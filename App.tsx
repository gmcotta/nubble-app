import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from './src/components/text';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Button } from './src/components/button';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView>
          <Text preset="headingLarge" italic>
            Olá mundo
          </Text>
          <Text preset="headingLarge">Olá mundo</Text>
          <Button title="Entrar" loading={false} />
          <Button title="Outline" loading={false} variant="outline" />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
