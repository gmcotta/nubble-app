import { useNavigation } from '@react-navigation/native';

import { UseResetNavigationSuccessProps } from './props';

export function useResetNavigationSuccess({
  originRoute,
  successScreenParams
}: UseResetNavigationSuccessProps) {
  const navigation = useNavigation();

  function reset() {
    navigation.reset({
      index: 1,
      routes: [
        { name: originRoute },
        { name: 'SuccessScreen', params: successScreenParams }
      ]
    });
  }

  return { reset };
}
