import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppTabNavigator } from '@routes';
import {
  CameraScreen,
  SettingsScreen,
  PostCommentScreen,
  ProfileScreen,
  SearchScreen,
  PublishPostScreen
} from '@screens';
import { AppStackParamList, AppStackParams } from './props';

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack({
  initialRouteName = 'AppTabNavigator'
}: AppStackParams) {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
      initialRouteName={initialRouteName}
    >
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="PostCommentScreen" component={PostCommentScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="PublishPostScreen" component={PublishPostScreen} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
    </Stack.Navigator>
  );
}
