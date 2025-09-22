import { Box } from '@components';
import { PostActions, PostHeader, PostImage } from './components';
import { PostItemProps } from './props';

export function PostItem({ post }: PostItemProps) {
  return (
    <Box marginBottom="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
        reactionCount={post.reactionCount}
      />
    </Box>
  );
}
