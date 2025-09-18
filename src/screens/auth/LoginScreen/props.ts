import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as z from 'zod';

import { RootStackParamList } from '@routes';
import { loginSchema } from './schema';

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'LoginScreen'
>;

export type LoginFormSchema = z.infer<typeof loginSchema>;
