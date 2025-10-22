import { useRef, useState } from 'react';
import { FlatList, Image, Pressable } from 'react-native';

import { PermissionManager, Screen } from '@components';
import { useCameraRoll, usePermission } from '@services';
import { Header } from './components';
import * as C from './constants';
import { NewPostScreenProps } from './props';
import * as S from './styles';

export function NewPostScreen({}: NewPostScreenProps) {
  const [selectedImage, setSelectedImage] = useState<string>();
  const flatListRef = useRef<FlatList>(null);

  const permission = usePermission('photoLibrary');
  const { list, fetchNextPage } = useCameraRoll(
    permission.status === 'granted',
    setSelectedImage
  );

  function handleSelectImage(imageUri: string) {
    setSelectedImage(imageUri);
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
  }

  return (
    <PermissionManager
      permissionName="photoLibrary"
      description={C.SCREEN_VALUES.PERMISSION_DESCRIPTION}
    >
      <Screen canGoBack title={C.SCREEN_VALUES.TITLE} noPaddingHorizontal>
        <FlatList
          ref={flatListRef}
          data={list}
          keyExtractor={item => item}
          ListHeaderComponent={
            <Header imageUri={selectedImage} imageWidth={C.SCREEN_WIDTH} />
          }
          renderItem={({ item }) => (
            <Pressable onPress={() => handleSelectImage(item)}>
              <Image source={{ uri: item }} style={S.imageStyles} />
            </Pressable>
          )}
          numColumns={C.NUM_COLUMNS}
          onEndReachedThreshold={0.1}
          onEndReached={fetchNextPage}
        />
      </Screen>
    </PermissionManager>
  );
}
