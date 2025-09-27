/** Trechos comentados são sobre a implementação com context */

if (__DEV__) {
  require('./reactotronConfig');
}

import { ThemeProvider } from '@shopify/restyle';
import { QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Toast } from '@components';
import { Router } from '@routes';
// import { ToastProvider } from '@services';
import { theme } from '@theme';
import { queryClient } from './queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          {/* <ToastProvider> */}
          <Router />
          <Toast />
          {/* </ToastProvider> */}
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default App;
