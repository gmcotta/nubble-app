import { StyleSheet } from 'react-native';
import { ButtonProps, RestyleBoxProps } from '@components';

export const imageBackgroundStyles = (imageWidth: number) =>
  StyleSheet.create({
    imageBackground: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: imageWidth,
      height: imageWidth
    }
  });

export const optionStyles: RestyleBoxProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 's24',
  paddingVertical: 's16'
};

export const buttonStyles: Omit<ButtonProps, 'title'> = {
  marginBottom: 's24'
};
