import { dateUtils } from '@utils';
import { PostComment, PostCommentAPI } from './postCommentTypes';

function toCommentPost(postCommentAPI: PostCommentAPI): PostComment {
  const createdAt = postCommentAPI.created_at;
  return {
    id: postCommentAPI.id,
    message: postCommentAPI.message,
    createdAt: createdAt,
    relativeCreatedAt: dateUtils.formatRelative(createdAt),
    author: {
      id: postCommentAPI.user_id,
      profileURL: postCommentAPI.user.profile_url,
      name: postCommentAPI.user.full_name,
      userName: postCommentAPI.user.username
    }
  };
}

export const postCommentAdapter = {
  toCommentPost
};
