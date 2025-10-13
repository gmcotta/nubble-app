import { Box } from '@components';
import { PostActions, PostBottom, PostHeader, PostImage } from './components';
import { PostItemProps } from './props';
import * as S from './styles';

export function PostItem({ post }: PostItemProps) {
  return (
    <Box {...S.containerStyles}>
      <PostHeader author={post.author} />
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
