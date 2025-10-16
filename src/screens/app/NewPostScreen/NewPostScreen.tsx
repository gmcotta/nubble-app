import { FlatList, Image } from 'react-native';

import { Screen, Text } from '@components';
import { useCameraRoll } from '@services';
import { NewPostScreenProps } from './props';

export function NewPostScreen({}: NewPostScreenProps) {
  const { list } = useCameraRoll();

  return (
    <Screen>
      <Text preset="headingSmall">New Post Screen</Text>
      <FlatList
        data={list}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={{ width: 200, height: 200 }} />
        )}
      />
    </Screen>
  );
}
