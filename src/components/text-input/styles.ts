import { TextInputProps } from 'react-native';

import { RestyleBoxProps, TextProps } from '@components';
import { fontFamilyValues, fontSizesValues } from '@styles';

export const labelStyles: TextProps = {
  preset: 'paragraphMedium',
  marginBottom: 's4'
};

export function inputContainerStyles(errorMessage?: string): RestyleBoxProps {
  return {
    borderWidth: errorMessage ? 2 : 1,
    padding: 's16',
    borderColor: errorMessage ? 'error' : 'gray4',
    borderRadius: 's12',
    flexDirection: 'row',
    alignItems: 'center'
  };
}

export const textInputStyles: TextInputProps['style'] = {
  padding: 0,
  fontFamily: fontFamilyValues.regular,
  flex: 1,
  ...fontSizesValues.paragraphMedium
};

export const rightComponentContainerStyles: RestyleBoxProps = {
  marginLeft: 's16'
};

export const errorMessageTextStyles: TextProps = {
  preset: 'paragraphSmall',
  color: 'error',
  bold: true
};
