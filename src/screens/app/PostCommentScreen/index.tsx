import { FlatList } from 'react-native';

import { Box, Screen } from '@components';
import { usePostCommentList } from '@domain';
import { useAppSafeArea } from '@hooks';
import {
  PostCommentItem,
  PostCommentBottom,
  PostCommentTextMessage
} from './components';
import { PostCommentScreenProps, RenderItemProps } from './props';
import * as S from './styles';

function renderItem({
  postId,
  info,
  postAuthorId,
  onSuccess
}: RenderItemProps) {
  return (
    <PostCommentItem
      postId={postId}
      postComment={info.item}
      userId={1}
      postAuthorId={postAuthorId}
      onSuccess={onSuccess}
    />
  );
}

export function PostCommentScreen({ route }: PostCommentScreenProps) {
  const { postId, postAuthorId } = route.params;
  const { data, fetchNextPage, hasNextPage, refresh } =
    usePostCommentList(postId);

  const { bottom } = useAppSafeArea();

  return (
    <Screen canGoBack title="Comentários" flex={1}>
      <Box {...S.containerStyles}>
        <FlatList
          data={data}
          renderItem={info =>
            renderItem({ postId, info, postAuthorId, onSuccess: refresh })
          }
          ListFooterComponent={
            <PostCommentBottom
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
            />
          }
          contentContainerStyle={S.flatListContentStyles(bottom)}
          showsVerticalScrollIndicator={false}
        />
        <PostCommentTextMessage postId={postId} onSuccessAction={refresh} />
      </Box>
    </Screen>
  );
}
