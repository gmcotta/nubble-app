import { FlatList, ListRenderItemInfo, RefreshControl } from 'react-native';

import { Screen, PostItem } from '@components';
import { Post, usePostList } from '@domain';
import { HomeEmpty, HomeHeader } from './components';
import { HomeScreenProps } from './props';
import * as S from './styles';

function renderItem({ item }: ListRenderItemInfo<Post>) {
  return <PostItem post={item} />;
}

export function HomeScreen({}: HomeScreenProps) {
  const { postList, loading, error, fetchNextPage, refresh } = usePostList();

  return (
    <Screen style={S.screenStyles}>
      <FlatList
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={S.flatListContentStyles(postList.length)}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={<HomeEmpty loading={loading} error={error} />}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refresh} />
        }
        refreshing={loading}
      />
    </Screen>
  );
}
