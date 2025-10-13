import { ImageProps } from 'react-native';
import { ProfileAvatarProps } from './props';

export function imageStyles({
  size,
  borderRadius
}: Omit<ProfileAvatarProps, 'profileURL'>): ImageProps['style'] {
  return { width: size, height: size, borderRadius };
}
