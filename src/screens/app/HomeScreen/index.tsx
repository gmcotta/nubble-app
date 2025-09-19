import { Button, Screen, Text } from '@components';
import { HomeScreenProps } from './props';

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">Home</Text>
      <Button
        title="Configurações"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </Screen>
  );
}
