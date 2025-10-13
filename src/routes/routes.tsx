import { NavigationContainer } from '@react-navigation/native';

import { ActivityIndicator, Box } from '@components';
import { useAuthCredentialsService } from '@services';
import { AppStack, AuthStack } from './stacks';

export function Router() {
  const { authCredentials, isLoading } = useAuthCredentialsService();

  if (isLoading) {
    return (
      <Box
        flex={1}
        backgroundColor="background"
        justifyContent="center"
        alignItems="center"
      >
        <ActivityIndicator size="large" />
      </Box>
    );
  }

  return (
    <NavigationContainer>
      {authCredentials ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
