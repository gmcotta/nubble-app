import { RestyleBoxProps, TextProps } from '@components';

export const containerStyles: RestyleBoxProps = {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 's16'
};

export const rightContainerStyles: RestyleBoxProps = {
  marginLeft: 's12'
};

export const usernameStyles: TextProps = {
  bold: true,
  preset: 'paragraphSmall'
};

export const commentTextStyles: TextProps = {
  preset: 'paragraphSmall',
  color: 'gray1'
};
