import { useEffect, useState } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { Screen, PostItem } from '@components';
import { Post, postService } from '@domain';
import { HomeHeader } from './components';
import { HomeEmpty } from './components/empty';
import { HomeScreenProps } from './props';
import * as S from './styles';

export function HomeScreen({}: HomeScreenProps) {
  const [postList, setPostList] = useState<Post[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      setError(false);
      const list = await postService.getList();
      setPostList(list);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={S.screenStyles}>
      <FlatList
        data={postList}
        // data={[]}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={<HomeEmpty loading={loading} error={error} />}
        contentContainerStyle={S.flatListContentStyles(postList.length)}
      />
    </Screen>
  );
}
