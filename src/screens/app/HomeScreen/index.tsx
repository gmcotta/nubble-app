import { FlatList, ListRenderItemInfo } from 'react-native';

import { Screen, PostItem } from '@components';
import { Post, usePostList } from '@domain';
import { HomeEmpty, HomeHeader } from './components';
import { HomeScreenProps } from './props';
import * as S from './styles';

function renderItem({ item }: ListRenderItemInfo<Post>) {
  return <PostItem post={item} />;
}

export function HomeScreen({}: HomeScreenProps) {
  const { postList, loading, error } = usePostList();

  return (
    <Screen style={S.screenStyles}>
      <FlatList
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={<HomeEmpty loading={loading} error={error} />}
        contentContainerStyle={S.flatListContentStyles(postList.length)}
      />
    </Screen>
  );
}
