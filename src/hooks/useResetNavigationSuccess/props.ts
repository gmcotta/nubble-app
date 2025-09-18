import { RootStackParamList } from '@routes';

export interface UseResetNavigationSuccessProps {
  originRoute: keyof ReactNavigation.RootParamList;
  successScreenParams: RootStackParamList['SuccessScreen'];
}
