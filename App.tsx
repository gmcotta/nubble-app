if (__DEV__) {
  require('./reactotronConfig');
}

import { ThemeProvider } from '@shopify/restyle';
import { QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Toast } from '@components';
import { Router } from '@routes';
import { theme } from '@theme';
import { queryClient } from './queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <Router />
          <Toast />
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default App;
