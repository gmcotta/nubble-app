import { Pressable } from 'react-native';

import { Text } from '@components';
import * as C from './constants';
import { PostCommentBottomProps } from './props';
import * as S from './styles';

export function PostCommentBottom({
  fetchNextPage,
  hasNextPage
}: PostCommentBottomProps) {
  if (!hasNextPage) return;

  return (
    <Pressable onPress={fetchNextPage}>
      <Text {...S.buttonTextProps}>
        {C.SCREEN_VALUES.SEE_MORE_BUTTON.TITLE}
      </Text>
    </Pressable>
  );
}
