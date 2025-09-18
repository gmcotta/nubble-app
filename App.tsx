import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@shopify/restyle';

import { theme } from '@theme';
import { Router } from '@routes';

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
