import { QueryKeys } from '@infra';
import { authService } from '../../authService';
import { useTanstackQueryImpl } from './implementations';
import {
  UseAuthIsValueAvailableImplParams,
  UseAuthIsValueAvailableReturn
} from './props';

export function useAuthIsUsernameAvailable({
  value,
  enabled
}: UseAuthIsValueAvailableImplParams): UseAuthIsValueAvailableReturn {
  return useTanstackQueryImpl({
    value,
    enabled,
    queryFn: v => authService.isUsernameAvailable(v),
    queryKey: QueryKeys.isUsernameAvailable
  });
}

export function useAuthIsEmailAvailable({
  value,
  enabled
}: UseAuthIsValueAvailableImplParams): UseAuthIsValueAvailableReturn {
  return useTanstackQueryImpl({
    value,
    enabled,
    queryFn: v => authService.isEmailAvailable(v),
    queryKey: QueryKeys.isEmailAvaliable
  });
}
