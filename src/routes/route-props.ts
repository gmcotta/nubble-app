import { IconProps } from '@components';

export type AuthStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  ForgotPasswordScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
};

export type AppStackParamList = {
  HomeScreen: undefined;
  SettingsScreen: undefined;
};
