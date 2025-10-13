import { RestyleBoxProps, TextProps } from '@components';

export const boxContainerStyles: RestyleBoxProps = {
  marginTop: 's16',
  paddingHorizontal: 's24'
};

export const userNameTextStyles: TextProps = {
  preset: 'paragraphMedium',
  bold: true
};

export const contentTextStyles: TextProps = {
  preset: 'headingMedium'
};

export const commentTextStyles: TextProps = {
  marginTop: 's8',
  preset: 'paragraphSmall',
  bold: true,
  color: 'primary'
};
