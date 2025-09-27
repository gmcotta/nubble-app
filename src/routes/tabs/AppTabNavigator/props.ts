import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppStackParamList } from '@routes/stacks';

export type AppBottomTabParamList = {
  HomeScreen: undefined;
  NewPostScreen: undefined;
  FavoriteScreen: undefined;
  MyProfileScreen: {
    userId: number;
  };
};

export type AppBottomTabScreenProps<
  RouteName extends keyof AppBottomTabParamList
> = CompositeScreenProps<
  BottomTabScreenProps<AppBottomTabParamList, RouteName>,
  NativeStackScreenProps<AppStackParamList, 'AppTabNavigator'>
>;
