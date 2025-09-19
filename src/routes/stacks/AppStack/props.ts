import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppBottomTabParamList } from '@routes/tabs';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppBottomTabParamList>;
  SettingsScreen: undefined;
};

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>;
