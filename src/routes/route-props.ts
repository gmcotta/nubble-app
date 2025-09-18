import { IconProps } from '@components';

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  ForgotPasswordScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
};
