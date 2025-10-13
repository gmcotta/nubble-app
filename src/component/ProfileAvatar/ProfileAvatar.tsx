import { Image } from 'react-native';

import * as C from './constants';
import { ProfileAvatarProps } from './props';
import * as S from './styles';

export function ProfileAvatar({
  profileURL,
  size = C.PROFILE_SIZE,
  borderRadius = C.BORDER_RADIUS_SIZE
}: ProfileAvatarProps) {
  return (
    <Image
      source={{ uri: profileURL }}
      style={S.imageStyles({ size, borderRadius })}
    />
  );
}
