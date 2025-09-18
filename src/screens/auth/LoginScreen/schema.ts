import * as z from 'zod';

import { emailValidator, passwordValidator } from '@validations';

export const loginSchema = z.object({
  email: emailValidator,
  password: passwordValidator
});
