import { Alert, Pressable } from 'react-native';

import { Box, ProfileAvatar, Text } from '@components';
import { PostComment, postCommentService, useRemovePostComment } from '@domain';
import { useToastActions } from '@services';
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
  const { showToast } = useToastActions();
  const { removePostComment } = useRemovePostComment({
    onSuccess: () => {
      onSuccess();
      showToast({
        message: 'Comentário removido',
        position: 'bottom',
        type: 'error',
        duration: 3000
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
    Alert.alert('Deseja remover esse comentário?', 'Pressione remover', [
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
    <Pressable disabled={!canRemove} onLongPress={handleShowRemoveCommentAlert}>
      <Box {...S.containerStyles}>
        <ProfileAvatar profileURL={postComment.author.profileURL} />
        <Box {...S.rightContainerStyles}>
          <Text {...S.usernameStyles}>{postComment.author.userName}</Text>
          <Text {...S.commentTextStyles}>
            {postComment.message} - {postComment.relativeCreatedAt}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
}
