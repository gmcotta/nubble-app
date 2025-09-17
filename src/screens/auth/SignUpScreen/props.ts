import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/route-props';

export type SignUpScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SignUpScreen'
>;

export type SignUpFormFields = {
  username: string;
  fullName: string;
  email: string;
  password: string;
};
