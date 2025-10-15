import {
  RestyleBoxProps,
  TextProps,
  TouchableOpacityBoxProps
} from '@components';

export const headerContainerStyles: RestyleBoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 's24'
};

export const backButtonStyles: TouchableOpacityBoxProps = {
  flexDirection: 'row',
  alignItems: 'center',
  marginRight: 's10'
};

export const backButtonTextStyles: TextProps = {
  marginLeft: 's8',
  bold: true,
  preset: 'paragraphMedium'
};

export const titleStyles: TextProps = {
  preset: 'headingSmall'
};
