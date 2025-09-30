import { ThemeProvider } from '@shopify/restyle';
import { QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Toast } from '@components';
import { Router } from '@routes';
import { AuthCredentialsProvider } from '@services';
import { theme } from '@theme';
import { queryClient } from './queryClient';

if (__DEV__) {
  require('./reactotronConfig');
}

function App() {
  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <Router />
            <Toast />
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
}

export default App;
