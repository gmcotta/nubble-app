import * as z from 'zod';

import { AuthScreenProps } from '@routes';
import { loginSchema } from './schema';

export type LoginScreenProps = AuthScreenProps<'LoginScreen'>;

export type LoginFormSchema = z.infer<typeof loginSchema>;
