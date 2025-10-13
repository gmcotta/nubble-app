import { AppStackParamList } from './stacks/AppStack/props';
import { AuthStackParamList } from './stacks/AuthStack/props';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackParamList {}
  }
}
