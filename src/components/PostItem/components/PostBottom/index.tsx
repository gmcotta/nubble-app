import { useNavigation } from '@react-navigation/native';

import { Box, Text, TouchableOpacityBox } from '@components';
import * as C from './constants';
import { PostBottomProps } from './props';
import * as S from './styles';

function getCommentText(commentCount: number): string {
  return commentCount > 1
    ? C.SCREEN_VALUES.SEE_COMMENTS(commentCount)
    : C.SCREEN_VALUES.SEE_COMMENT;
}

export function PostBottom({
  author,
  text,
  commentCount,
  id: postId
}: PostBottomProps) {
  const navigation = useNavigation();

  function navigateToPostCommentScreen() {
    navigation.navigate('PostCommentScreen', {
      postId,
      postAuthorId: author.id
    });
  }

  return (
    <Box {...S.boxContainerStyles}>
      <Text {...S.userNameTextStyles}>{author.userName}</Text>
      <Text>{text}</Text>
      {commentCount > 0 ? (
        <TouchableOpacityBox onPress={navigateToPostCommentScreen}>
          <Text {...S.commentTextStyles}>{getCommentText(commentCount)}</Text>
        </TouchableOpacityBox>
      ) : null}
    </Box>
  );
}
