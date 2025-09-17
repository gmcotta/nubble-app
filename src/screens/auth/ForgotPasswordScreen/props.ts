import * as z from 'zod';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../routes/route-props';
import { forgotPasswordSchema } from './schema';

export type ForgotPasswordScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

export type ForgotPasswordFormSchema = z.infer<typeof forgotPasswordSchema>;
