import {
  RestyleBoxProps,
  TextProps,
  TouchableOpacityBoxProps
} from '@components';

export const profileBoxStyles: TouchableOpacityBoxProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 's16'
};

export const profileTextStyles: TextProps = {
  medium: true,
  preset: 'paragraphMedium',
  marginLeft: 's12'
};

export const leftContainerStyles: RestyleBoxProps = {
  flexDirection: 'row',
  alignItems: 'center'
};
