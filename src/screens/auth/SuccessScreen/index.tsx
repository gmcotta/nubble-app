import { Button } from '../../../components/button';
import { Icon } from '../../../components/icon';
import { Screen } from '../../../components/screen';
import { Text } from '../../../components/text';
import { SuccessScreenProps } from './props';

export function SuccessScreen({ route }: SuccessScreenProps) {
  const { params } = route;
  function handleBackToBeginning() {}

  return (
    <Screen canGoBack>
      <Icon size={48} {...params.icon} />
      <Text preset="headingLarge" marginTop="s24">
        {params.title}
      </Text>
      <Text preset="paragraphLarge" marginTop="s16">
        {params.description}
      </Text>
      <Button
        onPress={handleBackToBeginning}
        title="Voltar ao início"
        marginTop="s40"
      />
    </Screen>
  );
}
