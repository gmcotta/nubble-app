import * as z from 'zod';

import {
  emailValidator,
  fullNameValidator,
  newPasswordValidator,
  usernameValidator
} from '../../../validations';

export const signUpSchema = z.object({
  username: usernameValidator,
  fullName: fullNameValidator,
  email: emailValidator,
  password: newPasswordValidator
});
