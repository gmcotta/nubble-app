import { PressableBoxProps } from '@components';
import { User } from '@domain';

export type ProfileUserProps = {
  user: Pick<User, 'id' | 'profileUrl' | 'username'>;
} & PressableBoxProps;
