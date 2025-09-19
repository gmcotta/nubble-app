import { NavigationContainer } from '@react-navigation/native';

import { AppStack } from './stacks/AppStack';
import { AuthStack } from './stacks/AuthStack';

export function Router() {
  const isAuthenticated = false;

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
