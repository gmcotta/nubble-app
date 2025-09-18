import * as z from 'zod';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '@routes';
import { loginSchema } from './schema';

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'LoginScreen'
>;

export type LoginFormSchema = z.infer<typeof loginSchema>;
