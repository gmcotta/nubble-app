import { NavigationContainer } from '@react-navigation/native';

import { AppStack, AuthStack } from './stacks';

export function Router() {
  const isAuthenticated = true;

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
