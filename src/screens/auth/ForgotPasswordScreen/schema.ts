import * as z from 'zod';

import { emailValidator } from '../../../validations';

export const forgotPasswordSchema = z.object({
  email: emailValidator
});
