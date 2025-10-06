import { fireEvent, render, screen } from 'test-utils';
import { PostBottom } from '../PostBottom';
import { mockedPost } from './mocks/mockedPost';

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: mockedNavigate
    })
  };
});

describe('<PostBottom />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should not show the comment link if has no comment', () => {
    render(<PostBottom {...mockedPost} commentCount={0} />);

    const commentLinkElement = screen.queryByText(/comentário/i);
    expect(commentLinkElement).toBeFalsy();
  });

  it('should navigate to PostCommentScreen when comment link is pressed', () => {
    render(<PostBottom {...mockedPost} commentCount={2} />);

    const commentLinkElement = screen.getByText(/comentário/i);
    fireEvent.press(commentLinkElement);

    expect(mockedNavigate).toHaveBeenCalledWith('PostCommentScreen', {
      postId: mockedPost.id,
      postAuthorId: mockedPost.author.id
    });
  });
});
