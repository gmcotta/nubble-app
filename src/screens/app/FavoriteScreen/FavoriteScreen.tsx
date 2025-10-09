import { Button, Screen, Text } from '@components';
import { FavoriteScreenProps } from './props';

export function FavoriteScreen({ navigation }: FavoriteScreenProps) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Favorite Screen</Text>
      <Button title="Home" onPress={() => navigation.navigate('HomeScreen')} />
    </Screen>
  );
}
