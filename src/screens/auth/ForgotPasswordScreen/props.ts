import * as z from 'zod';

import { AuthScreenProps } from '@routes';
import { forgotPasswordSchema } from './schema';

export type ForgotPasswordScreenProps = AuthScreenProps<'ForgotPasswordScreen'>;

export type ForgotPasswordFormSchema = z.infer<typeof forgotPasswordSchema>;
