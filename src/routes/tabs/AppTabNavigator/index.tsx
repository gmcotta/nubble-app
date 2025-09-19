import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '@screens/app';
import { AppBottomTabParamList } from './props';

const Tab = createBottomTabNavigator<AppBottomTabParamList>();

export function AppTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
    </Tab.Navigator>
  );
}
