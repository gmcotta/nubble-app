import { IconProps } from '@components';
import { Post } from '@domain';

export interface ItemProps {
  onPress: () => void;
  icon: {
    default: IconProps['name'];
    active: IconProps['name'];
  };
  text: number;
  isActive: boolean;
}

export type PostActionsProps = Pick<
  Post,
  'commentCount' | 'favoriteCount' | 'reactionCount'
>;
