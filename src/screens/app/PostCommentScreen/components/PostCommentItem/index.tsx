import { Box, ProfileAvatar, Text } from '@components';
import { PostComment } from '@domain';
import * as S from './styles';

export function PostCommentItem({ postComment }: { postComment: PostComment }) {
  return (
    <Box {...S.containerStyles}>
      <ProfileAvatar profileURL={postComment.author.profileURL} />
      <Box {...S.rightContainerStyles}>
        <Text {...S.usernameStyles}>{postComment.author.userName}</Text>
        <Text {...S.commentTextStyles}>
          {postComment.message} - {postComment.relativeCreatedAt}
        </Text>
      </Box>
    </Box>
  );
}
