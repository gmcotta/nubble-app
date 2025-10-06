import { Box, Icon, Text, TouchableOpacityBox } from '@components';

import { ItemProps, PostActionsProps } from './props';
import * as S from './styles';

function Item({ onPress, icon, text, isActive }: ItemProps) {
  return (
    <TouchableOpacityBox {...S.itemContainerStyles} onPress={onPress}>
      <Icon
        name={isActive ? icon.active : icon.default}
        color={isActive ? 'marked' : undefined}
      />
      {text > 0 ? <Text {...S.itemTextStyles}>{text}</Text> : null}
    </TouchableOpacityBox>
  );
}

export function PostActions({
  commentCount,
  favoriteCount,
  reactionCount
}: PostActionsProps) {
  function likePost() {}

  function navigateToComments() {}

  function favoritePost() {}

  return (
    <Box {...S.postActionsContainerStyles}>
      <Item
        onPress={likePost}
        icon={{ default: 'heart', active: 'heartFill' }}
        isActive={true}
        text={reactionCount}
      />

      <Item
        onPress={navigateToComments}
        icon={{ default: 'comment', active: 'comment' }}
        isActive={false}
        text={commentCount}
      />

      <Item
        onPress={favoritePost}
        icon={{ default: 'bookmark', active: 'bookmarkFill' }}
        isActive={false}
        text={favoriteCount}
      />
    </Box>
  );
}
