import { NavigationContainer } from '@react-navigation/native';

import { useAuthCredentialsService } from 'services';
import { AppStack, AuthStack } from './stacks';

export function Router() {
  const { authCredentials } = useAuthCredentialsService();

  return (
    <NavigationContainer>
      {authCredentials ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
