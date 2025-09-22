import { Dimensions, ImageProps } from 'react-native';

export const postImageStyles: ImageProps['style'] = {
  width: Dimensions.get('screen').width,
  height: 300
};
