import { useTanstackQueryImpl } from './implementations';
import {
  UseAuthIsValueAvailableParams,
  UseAuthIsValueAvailableReturn
} from './props';

export function useAuthIsValueAvailable(
  params: UseAuthIsValueAvailableParams
): UseAuthIsValueAvailableReturn {
  return useTanstackQueryImpl(params);
}
