import * as z from 'zod';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../routes/route-props';
import { signUpSchema } from './schema';

export type SignUpScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SignUpScreen'
>;

export type SignUpFormSchema = z.infer<typeof signUpSchema>;
