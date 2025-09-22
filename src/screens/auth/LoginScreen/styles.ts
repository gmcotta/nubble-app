import {
  ButtonProps,
  PasswordInputProps,
  TextInputProps,
  TextProps,
  TouchableOpacityBoxProps
} from '@components';

export const titleStyles: TextProps = {
  preset: 'headingLarge',
  marginBottom: 's8'
};

export const descriptionStyles: TextProps = {
  preset: 'paragraphLarge',
  marginBottom: 's40'
};

export const textInputStyles: TextInputProps['boxProps'] = {
  marginBottom: 's20'
};

export const passwordInputStyles: PasswordInputProps['boxProps'] = {
  marginBottom: 's20'
};

export const forgotPasswordTextStyles: TextProps = {
  preset: 'paragraphSmall',
  color: 'primary',
  bold: true,
  marginBottom: 's40'
};

export const loginButtonStyles: TouchableOpacityBoxProps = {
  marginBottom: 's12'
};

export const signUpButtonStyles: Omit<ButtonProps, 'title'> = {
  variant: 'outline'
};
