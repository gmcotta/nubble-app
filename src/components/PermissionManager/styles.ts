import {
  ButtonProps,
  RestyleBoxProps,
  ScreenProps,
  TextProps
} from '@components';

export const screenStyles: ScreenProps['style'] = {
  flex: 1
};

export const flexContainerStyles: RestyleBoxProps = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
};

export const descriptionStyles: TextProps = {
  textAlign: 'center'
};

export const buttonStyles: Omit<ButtonProps, 'title'> = {
  marginTop: 's16'
};

export const androidDisclaimerStyles: TextProps = {
  marginVertical: 's16',
  textAlign: 'center'
};
