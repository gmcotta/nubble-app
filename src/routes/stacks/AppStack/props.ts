import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AppStackParamList = {
  AppTabNavigator: undefined;
  SettingsScreen: undefined;
};

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>;
