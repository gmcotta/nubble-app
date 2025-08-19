import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from './src/components/text';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView>
          <Text preset="headingLarge" italic style={{ color: 'red' }}>
            Olá mundo
          </Text>
          <Text preset="headingLarge">Olá mundo</Text>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
