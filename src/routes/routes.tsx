import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from '../screens/auth/Login';
import { SignUpScreen } from '../screens/auth/SignUp';
import { SuccessScreen } from '../screens/auth/SuccessScreen';
import { RootStackParamList } from './route-props';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
        initialRouteName="LoginScreen"
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
