import { Dimensions, ImageStyle, StyleProp } from 'react-native';
import { ButtonProps, RestyleBoxProps, TextProps } from '@components';

const IMAGE_WIDTH = Dimensions.get('screen').width / 2;

export const imageStyles: StyleProp<ImageStyle> = {
  width: IMAGE_WIDTH,
  height: IMAGE_WIDTH,
  alignSelf: 'center',
  marginTop: 20
};

export const headingStyles: TextProps = {
  marginTop: 's32',
  marginBottom: 's10'
};

export const textInputContainerStyles: RestyleBoxProps = {
  borderWidth: 0,
  paddingLeft: 's0'
};

export const buttonStyles: Omit<ButtonProps, 'title'> = {
  marginTop: 's56'
};
