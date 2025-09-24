import { Image } from 'react-native';

import { Box, Text } from '@components';
import { PostHeaderProps } from './props';
import * as S from './styles';

export function PostHeader({ author }: PostHeaderProps) {
  const { profileURL, userName } = author;

  return (
    <Box {...S.profileBoxStyles}>
      <Image source={{ uri: profileURL }} style={S.profileImageStyles} />
      <Text {...S.profileTextStyles}>{userName}</Text>
    </Box>
  );
}
