import { RootStackParamList } from '../../routes/route-props';

export interface UseResetNavigationSuccessProps {
  originRoute: keyof ReactNavigation.RootParamList;
  successScreenParams: RootStackParamList['SuccessScreen'];
}
