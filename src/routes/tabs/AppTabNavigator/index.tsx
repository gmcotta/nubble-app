import {
  BottomTabBarProps,
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import {
  HomeScreen,
  NewPostScreen,
  FavoriteScreen,
  MyProfileScreen
} from '@screens';
import { AppTabBar } from '../AppTabBar';
import { AppBottomTabParamList } from './props';

const Tab = createBottomTabNavigator<AppBottomTabParamList>();

export function AppTabNavigator() {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
      tabBar={renderTabBar}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
      <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
    </Tab.Navigator>
  );
}
