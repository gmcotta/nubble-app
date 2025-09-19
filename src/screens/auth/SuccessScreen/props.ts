import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AuthStackParamList } from '@routes';

export type SuccessScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'SuccessScreen'
>;
