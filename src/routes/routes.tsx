import { NavigationContainer } from '@react-navigation/native';

import { AppStack, AuthStack } from './stacks';

export function Router() {
  const isAuthenticated = false;

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
