import { Alert } from 'react-native';

import { Box, ProfileAvatar, Text, TouchableOpacityBox } from '@components';
import { PostComment, postCommentService, useRemovePostComment } from '@domain';
import { useToast } from '@services';
import * as S from './styles';

export function PostCommentItem({
  postComment,
  userId,
  postAuthorId,
  onSuccess
}: {
  postComment: PostComment;
  userId: number;
  postAuthorId: number;
  onSuccess: () => void;
}) {
  const { showToast } = useToast();
  const { removePostComment } = useRemovePostComment({
    onSuccess: () => {
      onSuccess();
      showToast({
        message: 'Comentário removido'
      });
    },
    errorMessage: 'Erro ao remover comentário'
  });

  const canRemove = postCommentService.canRemove(
    postComment,
    userId,
    postAuthorId
  );

  function handleShowRemoveCommentAlert() {
    Alert.alert('Deseja remover esse comentário?', '', [
      {
        text: 'Remover',
        onPress: () => {
          removePostComment({ postCommentId: postComment.id });
        }
      },
      {
        text: 'Cancelar',
        style: 'cancel'
      }
    ]);
  }

  return (
    <TouchableOpacityBox
      disabled={!canRemove}
      onLongPress={handleShowRemoveCommentAlert}
    >
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
