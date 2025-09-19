import { AuthStackParamList } from '@routes';

export interface UseResetNavigationSuccessProps {
  originRoute: keyof ReactNavigation.RootParamList;
  successScreenParams: AuthStackParamList['SuccessScreen'];
}
