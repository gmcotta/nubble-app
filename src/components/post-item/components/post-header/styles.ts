import { ImageProps } from 'react-native';

import { RestyleBoxProps, TextProps } from '@components';

export const profileBoxStyles: RestyleBoxProps = {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 's16',
  paddingHorizontal: 's24'
};

export const profileImageStyles: ImageProps = {
  width: 32,
  height: 32,
  borderRadius: 14
};

export const profileTextStyles: TextProps = {
  medium: true,
  preset: 'paragraphMedium',
  marginLeft: 's12'
};
