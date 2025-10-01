import * as z from 'zod';

import {
  emailValidator,
  nameValidator,
  newPasswordValidator,
  usernameValidator
} from '@validations';

export const signUpSchema = z.object({
  username: usernameValidator,
  firstName: nameValidator,
  lastName: nameValidator,
  email: emailValidator,
  password: newPasswordValidator
});
