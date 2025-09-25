import { FlatList, ListRenderItemInfo } from 'react-native';

import { Screen } from '@components';
import { PostComment, usePostCommentList } from '@domain';
import { useAppSafeArea } from '@hooks';
import { PostCommentItem, PostCommentBottom } from './components';
import { PostCommentScreenProps } from './props';
import * as S from './styles';

function renderItem({ item }: ListRenderItemInfo<PostComment>) {
  return <PostCommentItem postComment={item} />;
}

export function PostCommentScreen({ route }: PostCommentScreenProps) {
  const postId = route.params.postId;
  const { data, fetchNextPage, hasNextPage } = usePostCommentList(postId);

  const { bottom } = useAppSafeArea();

  return (
    <Screen canGoBack title="Comentários">
      <FlatList
        data={data}
        renderItem={renderItem}
        ListFooterComponent={
          <PostCommentBottom
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
          />
        }
        contentContainerStyle={S.flatListContentStyles(bottom)}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}
