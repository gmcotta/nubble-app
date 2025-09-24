import { Button, Icon, Screen, Text } from '@components';
import * as C from './constants';
import { SuccessScreenProps } from './props';
import * as S from './styles';

export function SuccessScreen({ navigation, route }: SuccessScreenProps) {
  const { params } = route;

  function mavigateToBeginning() {
    navigation.navigate('LoginScreen');
  }

  return (
    <Screen>
      <Icon size={C.ICON_SIZE} {...params.icon} />
      <Text {...S.titleStyles}>{params.title}</Text>
      <Text {...S.descriptionStyles}>{params.description}</Text>
      <Button
        onPress={mavigateToBeginning}
        title={C.SCREEN_VALUES.BACK_BUTTON.TITLE}
        {...S.backButtonStyles}
      />
    </Screen>
  );
}
