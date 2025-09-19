import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppTabNavigator } from '@routes/tabs';
import { SettingsScreen } from '@screens/app';
import { AppStackParamList } from './props';

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
      initialRouteName="AppTabNavigator"
    >
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
