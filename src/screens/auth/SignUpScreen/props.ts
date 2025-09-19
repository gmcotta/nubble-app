import * as z from 'zod';

import { AuthScreenProps } from '@routes';
import { signUpSchema } from './schema';

export type SignUpScreenProps = AuthScreenProps<'SignUpScreen'>;

export type SignUpFormSchema = z.infer<typeof signUpSchema>;
