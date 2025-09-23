import { useEffect, useState } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { Screen, PostItem } from '@components';
import { Post, postService } from '@domain';
import { HomeHeader } from './components';
import { HomeScreenProps } from './props';
import * as S from './styles';

export function HomeScreen({}: HomeScreenProps) {
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    postService.getList().then(list => {
      setPostList(list);
    });
  }, []);

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={S.screenStyles}>
      <FlatList
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListHeaderComponent={<HomeHeader />}
      />
    </Screen>
  );
}
