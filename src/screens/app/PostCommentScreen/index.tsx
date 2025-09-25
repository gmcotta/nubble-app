import { FlatList, ListRenderItemInfo } from 'react-native';

import { Box, Screen } from '@components';
import { PostComment, usePostCommentList } from '@domain';
import { PostCommentItem } from './components';
import { PostCommentScreenProps } from './props';

function renderItem({ item }: ListRenderItemInfo<PostComment>) {
  return <PostCommentItem postComment={item} />;
}

export function PostCommentScreen({ route }: PostCommentScreenProps) {
  const postId = route.params.postId;
  const { data } = usePostCommentList(postId);

  return (
    <Screen canGoBack title="Comentários">
      <Box>
        <FlatList data={data} renderItem={renderItem} />
      </Box>
    </Screen>
  );
}
