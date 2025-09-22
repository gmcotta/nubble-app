import { Box, Text } from '@components';
import { PostBottomProps } from './props';
import * as S from './styles';

function getCommentText(commentCount: number): string {
  return commentCount > 1
    ? `ver ${commentCount} comentários`
    : 'ver comentário';
}

export function PostBottom({ author, text, commentCount }: PostBottomProps) {
  return (
    <Box {...S.boxContainerStyles}>
      <Text {...S.userNameTextStyles}>{author.userName}</Text>
      <Text>{text}</Text>
      {commentCount > 0 ? (
        <Text {...S.commentTextStyles}>{getCommentText(commentCount)}</Text>
      ) : null}
    </Box>
  );
}
