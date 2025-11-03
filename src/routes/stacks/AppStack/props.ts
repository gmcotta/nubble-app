import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppBottomTabParamList } from '../../tabs';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppBottomTabParamList>;
  SettingsScreen: undefined;
  PostCommentScreen: {
    postId: number;
    postAuthorId: number;
  };
  ProfileScreen: {
    userId: number;
  };
  SearchScreen: undefined;
  PublishPostScreen: {
    imageUri?: string;
  };
  CameraScreen: undefined;
};

export interface AppStackParams {
  initialRouteName?: keyof AppStackParamList | undefined;
}

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>;
