import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as z from 'zod';

import { AuthStackParamList } from '@routes';
import { forgotPasswordSchema } from './schema';

export type ForgotPasswordScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'ForgotPasswordScreen'
>;

export type ForgotPasswordFormSchema = z.infer<typeof forgotPasswordSchema>;
