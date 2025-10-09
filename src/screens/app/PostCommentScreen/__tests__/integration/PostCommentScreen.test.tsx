import { customRenderScreen } from 'test-utils';
import { PostCommentScreen } from '../../PostCommentScreen';

describe('integration: PostCommentScreen', () => {
  it('should add a comment and update automatically the list', () => {
    customRenderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'PostCommentScreen',
          params: { postAuthorId: 1, postId: 1 }
        }}
      />
    );
  });
});
