import { server } from '@test';
import { screen, renderScreen, fireEvent } from 'test-utils';
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

    const textInput = screen.getByPlaceholderText(/Escreva um comentário/i);
    const sendButton = screen.getByText(/Enviar/i);

    fireEvent.changeText(textInput, 'novo comentário');
    fireEvent.press(sendButton);

    const newComment = await screen.findByText(/novo comentário/i);
    const comments = await screen.findAllByTestId('post-comment-item');

    expect(newComment).toBeTruthy();
    expect(comments.length).toBe(2);
  });
});
