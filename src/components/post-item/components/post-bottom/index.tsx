import { useNavigation } from '@react-navigation/native';
import { Box, Text, TouchableOpacityBox } from '@components';
import { PostBottomProps } from './props';
import * as S from './styles';

function getCommentText(commentCount: number): string {
  return commentCount > 1
    ? `ver ${commentCount} comentários`
    : 'ver comentário';
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
      postId
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
