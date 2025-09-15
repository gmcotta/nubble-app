import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@shopify/restyle';

import { theme } from './src/theme/theme';
// import { LoginScreen } from './src/screens/auth/Login';
import { SignUpScreen } from './src/screens/auth/SignUp';

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <SignUpScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
