import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppTabNavigator } from '@routes';
import {
  SettingsScreen,
  PostCommentScreen,
  ProfileScreen,
  SearchScreen
} from '@screens';
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
      <Stack.Screen name="PostCommentScreen" component={PostCommentScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
}
