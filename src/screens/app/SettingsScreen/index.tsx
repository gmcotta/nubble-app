import { Button, Screen, Text } from '@components';
import { SettingsScreenProps } from './props';

export function SettingsScreen({ navigation }: SettingsScreenProps) {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">Configurações</Text>
      <Button
        title="New post screen"
        onPress={() =>
          navigation.navigate('AppTabNavigator', {
            screen: 'NewPostScreen'
          })
        }
      />
    </Screen>
  );
}
