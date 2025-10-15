import { User } from '@domain';

export interface ProfileUserProps {
  user: Pick<User, 'id' | 'profileUrl' | 'username'>;
}
