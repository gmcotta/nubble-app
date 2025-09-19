import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as z from 'zod';

import { AuthStackParamList } from '@routes';
import { signUpSchema } from './schema';

export type SignUpScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'SignUpScreen'
>;

export type SignUpFormSchema = z.infer<typeof signUpSchema>;
