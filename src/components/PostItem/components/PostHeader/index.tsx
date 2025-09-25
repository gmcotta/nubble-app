import { Box, ProfileAvatar, Text } from '@components';
import { PostHeaderProps } from './props';
import * as S from './styles';

export function PostHeader({ author }: PostHeaderProps) {
  const { profileURL, userName } = author;

  return (
    <Box {...S.profileBoxStyles}>
      <ProfileAvatar profileURL={profileURL} />
      <Text {...S.profileTextStyles}>{userName}</Text>
    </Box>
  );
}
