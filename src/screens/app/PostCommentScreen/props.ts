import { ListRenderItemInfo } from 'react-native';

import { PostComment } from '@domain';
import { AppScreenProps } from '@routes';

export type PostCommentScreenProps = AppScreenProps<'PostCommentScreen'>;

export interface RenderItemProps {
  userId: number | null;
  postId: number;
  info: ListRenderItemInfo<PostComment>;
  postAuthorId: number;
  onSuccess: () => Promise<void>;
}
