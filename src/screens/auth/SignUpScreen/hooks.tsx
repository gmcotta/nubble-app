import { UseFormGetFieldState, UseFormWatch } from 'react-hook-form';

import {
  UseAuthIsValueAvailableImplParams,
  UseAuthIsValueAvailableReturn
} from '@domain';
import { SignUpFormSchema } from './props';

interface UseGetValueQueryProps {
  fieldName: keyof SignUpFormSchema;
  watch: UseFormWatch<SignUpFormSchema>;
  getFieldState: UseFormGetFieldState<SignUpFormSchema>;
  queryHook: (
    params: UseAuthIsValueAvailableImplParams
  ) => UseAuthIsValueAvailableReturn;
  errorMessage: string;
}

interface UseGetValueQueryReturn {
  isFetching: boolean;
  isNotReady: boolean;
  errorMessage: string | undefined;
}

export function useGetValueQuery({
  fieldName,
  watch,
  getFieldState,
  queryHook,
  errorMessage
}: UseGetValueQueryProps): UseGetValueQueryReturn {
  const field = watch(fieldName);
  const fieldState = getFieldState(fieldName);
  const isFieldValid = !fieldState.invalid && fieldState.isDirty;
  const { isFetching, isUnavailable } = queryHook({
    value: field,
    enabled: isFieldValid
  });

  return {
    isFetching: isFetching,
    isNotReady: isFetching || isUnavailable,
    errorMessage: isUnavailable ? errorMessage : undefined
  };
}
