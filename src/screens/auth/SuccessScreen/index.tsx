import { Button, Icon, Screen, Text } from '@components';
import { SuccessScreenProps } from './props';
import * as S from './styles';

export function SuccessScreen({ navigation, route }: SuccessScreenProps) {
  const { params } = route;

  function mavigateToBeginning() {
    navigation.navigate('LoginScreen');
  }

  return (
    <Screen>
      <Icon size={48} {...params.icon} />
      <Text {...S.titleStyles}>{params.title}</Text>
      <Text {...S.descriptionStyles}>{params.description}</Text>
      <Button
        onPress={mavigateToBeginning}
        title="Voltar ao início"
        {...S.backButtonStyles}
      />
    </Screen>
  );
}
