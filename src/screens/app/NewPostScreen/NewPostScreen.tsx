import { useRef, useState } from 'react';
import { Dimensions, FlatList, Image, Pressable } from 'react-native';

import { Screen } from '@components';
import { useCameraRoll } from '@services';
import { Header } from './components';
import { NewPostScreenProps } from './props';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const NUM_COLUMNS = 4;
const ITEM_WIDTH = SCREEN_WIDTH / NUM_COLUMNS;

export function NewPostScreen({}: NewPostScreenProps) {
  const [selectedImage, setSelectedImage] = useState<string>();
  const flatListRef = useRef<FlatList>(null);

  const { list, fetchNextPage } = useCameraRoll(true, setSelectedImage);

  function handleSelectImage(imageUri: string) {
    setSelectedImage(imageUri);
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
  }

  return (
    <Screen canGoBack title="Novo post" noPaddingHorizontal>
      <FlatList
        ref={flatListRef}
        data={list}
        keyExtractor={item => item}
        ListHeaderComponent={
          <Header imageUri={selectedImage} imageWidth={SCREEN_WIDTH} />
        }
        renderItem={({ item }) => (
          <Pressable onPress={() => handleSelectImage(item)}>
            <Image
              source={{ uri: item }}
              style={{ width: ITEM_WIDTH, height: ITEM_WIDTH }}
            />
          </Pressable>
        )}
        numColumns={4}
        onEndReachedThreshold={0.1}
        onEndReached={fetchNextPage}
      />
    </Screen>
  );
}
