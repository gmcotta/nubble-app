import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as z from 'zod';

import { RootStackParamList } from '@routes';
import { signUpSchema } from './schema';

export type SignUpScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SignUpScreen'
>;

export type SignUpFormSchema = z.infer<typeof signUpSchema>;
