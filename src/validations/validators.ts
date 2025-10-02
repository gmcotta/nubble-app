import * as z from 'zod';

import { stringUtils } from '@utils';
import * as C from './constants';

const usernameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{5,29}$/gim;

export const usernameValidator = z
  .string()
  .min(5, C.ERROR_MESSAGES.USERNAME.SHORT)
  .regex(usernameRegex, C.ERROR_MESSAGES.USERNAME.INVALID);

export const nameValidator = z
  .string()
  .min(5, C.ERROR_MESSAGES.FULL_NAME.SHORT)
  .max(80, C.ERROR_MESSAGES.FULL_NAME.LONG)
  .transform(stringUtils.capitalizeFirstLetter);

export const emailValidator = z.email(C.ERROR_MESSAGES.EMAIL.INVALID);

export const newPasswordValidator = z
  .string()
  .min(8, C.ERROR_MESSAGES.PASSWORD.SHORT);

export const passwordValidator = z
  .string()
  .min(1, C.ERROR_MESSAGES.PASSWORD.REQUIRED);
