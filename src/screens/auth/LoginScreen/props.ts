import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as z from 'zod';

import { AuthStackParamList } from '@routes';
import { loginSchema } from './schema';

export type LoginScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'LoginScreen'
>;

export type LoginFormSchema = z.infer<typeof loginSchema>;
