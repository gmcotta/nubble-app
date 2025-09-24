import { Box, Screen, Text } from '@components';
import { PostCommentScreenProps } from './props';

export function PostCommentScreen({ route }: PostCommentScreenProps) {
  const postId = route.params.postId;

  return (
    <Screen canGoBack title="Comentários">
      <Box>
        <Text>{postId}</Text>
      </Box>
    </Screen>
  );
}
