import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  HomeScreen,
  NewPostScreen,
  FavoriteScreen,
  MyProfileScreen
} from '@screens/app';
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
      <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
      <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
    </Tab.Navigator>
  );
}
