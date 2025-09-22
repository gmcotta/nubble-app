import { useEffect, useState } from 'react';

import { FlatList, Image, ListRenderItemInfo } from 'react-native';
import { Box, Screen, Text } from '@components';
import { Post, postService } from '@domain';
import { postImageStyles, profileImageStyles } from './styles';
// import { HomeScreenProps } from './props';

export function HomeScreen() {
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    postService.getList().then(list => {
      console.log(list);
      setPostList(list);
    });
  }, []);

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return (
      <Box marginBottom="s24">
        <Box flexDirection="row">
          <Image
            source={{ uri: item.author.profileURL }}
            style={profileImageStyles}
          />
          <Text>{item.author.name}</Text>
        </Box>
        <Image source={{ uri: item.imageURL }} style={postImageStyles} />
      </Box>
    );
  }

  return (
    <Screen>
      <FlatList
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </Screen>
  );
}
