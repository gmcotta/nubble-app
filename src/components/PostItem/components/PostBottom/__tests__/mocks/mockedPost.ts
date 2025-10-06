import { Post } from '@domain';

export const mockedPost: Post = {
  id: 1,
  text: 'Teste text',
  author: {
    id: 10,
    profileURL: 'fake-profile-url',
    name: 'Maria Julia',
    userName: 'mariajulia'
  },
  imageURL: 'fake-image-url',
  reactionCount: 1,
  commentCount: 2,
  favoriteCount: 3
};
