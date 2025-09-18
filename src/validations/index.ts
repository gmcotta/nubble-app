import * as z from 'zod';

import { errorMessages } from './constants';

const usernameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const usernameValidator = z
  .string()
  .regex(usernameRegex, errorMessages.username.invalid);

export const fullNameValidator = z
  .string()
  .min(5, errorMessages.fullName.short)
  .max(80, errorMessages.fullName.long);

export const emailValidator = z.email(errorMessages.email.invalid);

export const newPasswordValidator = z
  .string()
  .min(8, errorMessages.password.short);

export const passwordValidator = z
  .string()
  .min(1, errorMessages.password.required);
