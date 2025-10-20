import { Dimensions, FlatList, Image } from 'react-native';

import { Screen } from '@components';
import { useCameraRoll } from '@services';
import { Header } from './components';
import { NewPostScreenProps } from './props';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const NUM_COLUMNS = 4;
const ITEM_WIDTH = SCREEN_WIDTH / NUM_COLUMNS;

export function NewPostScreen({}: NewPostScreenProps) {
  const { list, fetchNextPage } = useCameraRoll(true);

  return (
    <Screen canGoBack title="Novo post" noPaddingHorizontal>
      <FlatList
        data={list}
        keyExtractor={item => item}
        ListHeaderComponent={
          <Header imageUri={list[0]} imageWidth={SCREEN_WIDTH} />
        }
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={{ width: ITEM_WIDTH, height: ITEM_WIDTH }}
          />
        )}
        numColumns={4}
        onEndReachedThreshold={0.1}
        onEndReached={fetchNextPage}
      />
    </Screen>
  );
}
