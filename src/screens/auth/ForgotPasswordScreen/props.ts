import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as z from 'zod';

import { RootStackParamList } from '@routes';
import { forgotPasswordSchema } from './schema';

export type ForgotPasswordScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

export type ForgotPasswordFormSchema = z.infer<typeof forgotPasswordSchema>;
