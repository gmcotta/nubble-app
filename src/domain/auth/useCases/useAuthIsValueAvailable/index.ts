import { useTanstackQueryImpl } from './implementations';
import {
  UseAuthIsValueAvailableParams,
  UseAuthIsValueAvailableReturn
} from './params';

export function useAuthIsValueAvailable(
  params: UseAuthIsValueAvailableParams
): UseAuthIsValueAvailableReturn {
  return useTanstackQueryImpl(params);
}
