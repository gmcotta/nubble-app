import { RestyleBoxProps, TextProps } from '@components';

export const containerStyles: RestyleBoxProps = {
  flexGrow: 1,
  flexShrink: 1
};

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

export const leftComponentContainerStyles: RestyleBoxProps = {
  marginRight: 's16'
};

export const rightComponentContainerStyles: RestyleBoxProps = {
  marginLeft: 's16'
};

export const errorMessageTextStyles: TextProps = {
  preset: 'paragraphSmall',
  color: 'error',
  bold: true
};
