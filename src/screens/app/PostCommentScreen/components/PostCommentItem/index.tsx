import { Alert } from 'react-native';
import { Box, ProfileAvatar, Text, TouchableOpacityBox } from '@components';
import { PostComment, useRemovePostComment } from '@domain';
import * as S from './styles';

export function PostCommentItem({ postComment }: { postComment: PostComment }) {
  const { removePostComment } = useRemovePostComment();
  function handleShowRemoveCommentAlert() {
    Alert.alert('Deseja remover esse comentário?', '', [
      {
        text: 'Remover',
        onPress: () => removePostComment({ postCommentId: postComment.id })
      },
      {
        text: 'Cancelar',
        style: 'cancel'
      }
    ]);
  }

  return (
    <TouchableOpacityBox onLongPress={handleShowRemoveCommentAlert}>
      <Box {...S.containerStyles}>
        <ProfileAvatar profileURL={postComment.author.profileURL} />
        <Box {...S.rightContainerStyles}>
          <Text {...S.usernameStyles}>{postComment.author.userName}</Text>
          <Text {...S.commentTextStyles}>
            {postComment.message} - {postComment.relativeCreatedAt}
          </Text>
        </Box>
      </Box>
    </TouchableOpacityBox>
  );
}
