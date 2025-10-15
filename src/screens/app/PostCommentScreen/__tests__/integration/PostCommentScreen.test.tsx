import { Alert, AlertButton } from 'react-native';

import { screen, renderScreen, fireEvent, act, waitFor } from 'test-utils';
import { authCredentialsStorage } from '@services';
import {
  mockUtils,
  postCommentMockedData,
  resetInMemoryResponse,
  server
} from '@test';
import { PostCommentScreen } from '../../PostCommentScreen';

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

afterEach(() => {
  server.resetHandlers();
  resetInMemoryResponse();
});

afterAll(() => {
  server.close();
  jest.resetAllMocks();
  jest.useRealTimers();
});

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
    expect(comments.length).toBe(3);
  });

  it('should update automatically the list and show toast message when comment is deleted successfully', async () => {
    jest
      .spyOn(authCredentialsStorage, 'get')
      .mockResolvedValue(mockUtils.mateusAuthCredentials);

    let mockedConfirm: AlertButton['onPress'];
    const mockedAlert = jest
      .spyOn(Alert, 'alert')
      .mockImplementation((title, message, buttons) => {
        if (buttons && buttons[0]) {
          mockedConfirm = buttons[0].onPress;
        }
      });

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

    const comment = await screen.findByText(
      postCommentMockedData.mateusPostCommentAPI.message,
      {
        exact: false
      }
    );
    expect(comment).toBeTruthy();

    fireEvent(comment, 'longPress');
    expect(mockedAlert).toHaveBeenCalled();

    mockedConfirm && mockedConfirm();

    // TODO: tentar entender por que o waitForElementToBeRemoved não funcionou
    // await waitForElementToBeRemoved(() => {
    //   // eslint-disable-next-line testing-library/prefer-query-by-disappearance
    //   screen.getByText(postCommentMockedData.mateusPostCommentAPI.message, {
    //     exact: false
    //   });
    // });
    await waitFor(async () => {
      const removedComment = screen.queryByText(
        postCommentMockedData.mateusPostCommentAPI.message,
        {
          exact: false
        }
      );
      expect(removedComment).toBeNull();
    });

    const comments = screen.getAllByTestId('post-comment-item');
    expect(comments.length).toBe(1);

    await waitFor(() => {
      expect(screen.getByTestId('toast-message')).toBeTruthy();

      act(() => jest.runAllTimers());
    });

    expect(screen.queryByTestId('toast-message')).toBeNull();
  });
});
