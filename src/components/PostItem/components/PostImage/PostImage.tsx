import { Image } from 'react-native';

import { PostImageURL } from './props';
import * as S from './styles';

export function PostImage({ imageURL }: PostImageURL) {
  return <Image source={{ uri: imageURL }} style={S.postImageStyles} />;
}
