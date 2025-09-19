import { Button, Screen, Text } from '@components';
import { SettingsScreenProps } from './props';

export function SettingsScreen({ navigation }: SettingsScreenProps) {
  return (
    <Screen>
      <Text preset="headingLarge">Configurações</Text>
      <Button title="Home" onPress={() => navigation.navigate('HomeScreen')} />
    </Screen>
  );
}
