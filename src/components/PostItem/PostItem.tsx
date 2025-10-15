import { Box, ProfileUser } from '@components';
import { PostActions, PostBottom, PostImage } from './components';
import { PostItemProps } from './props';
import * as S from './styles';

export function PostItem({ post }: PostItemProps) {
  return (
    <Box {...S.containerStyles}>
      <Box {...S.profileContainerStyles}>
        <ProfileUser
          user={{
            id: post.author.id,
            profileUrl: post.author.profileURL,
            username: post.author.userName
          }}
        />
      </Box>
      <PostImage imageURL={post.imageURL} />
      <PostActions
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
        reactionCount={post.reactionCount}
      />
      <PostBottom
        author={post.author}
        text={post.text}
        commentCount={post.commentCount}
        id={post.id}
      />
    </Box>
  );
}
