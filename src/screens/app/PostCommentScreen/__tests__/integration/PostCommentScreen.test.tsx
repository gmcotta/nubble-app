import { server } from '@test';
import { screen, renderScreen } from 'test-utils';
import { PostCommentScreen } from '../../PostCommentScreen';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('integration: PostCommentScreen', () => {
  it('should add a comment and update automatically the list', async () => {
    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'PostCommentScreen',
          params: { postAuthorId: 1, postId: 1 }
        }}
      />
    );

    const comment = await screen.findByText(/comentário aleatório/i);
    expect(comment).toBeTruthy();
  });
});
