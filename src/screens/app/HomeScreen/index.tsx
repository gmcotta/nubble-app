import { useScrollToTop } from '@react-navigation/native';
import { useRef } from 'react';
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
  const flatListRef = useRef<FlatList<Post>>(null);
  useScrollToTop(flatListRef);
  const {
    data: postList,
    loading,
    error,
    fetchNextPage,
    refresh
  } = usePostList();

  return (
    <Screen style={S.screenStyles}>
      <FlatList
        ref={flatListRef}
        data={postList}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={S.flatListContentStyles(postList.length)}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={<HomeEmpty loading={loading} error={error} />}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={refresh}
            progressViewOffset={100}
          />
        }
        refreshing={loading}
      />
    </Screen>
  );
}
