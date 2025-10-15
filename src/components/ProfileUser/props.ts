import { ReactElement } from 'react';
import { PressableBoxProps, ProfileAvatarProps } from '@components';
import { User } from '@domain';

export type ProfileUserProps = {
  user: Pick<User, 'id' | 'profileUrl' | 'username'>;
  profileAvatarProps?: Omit<Partial<ProfileAvatarProps>, 'imageUrl'>;
  rightComponent?: ReactElement;
} & PressableBoxProps;
