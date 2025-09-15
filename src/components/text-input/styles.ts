import { $fontFamily, $fontSizes } from '../../styles';
import { RestyleBoxProps } from '../restyle/box/props';

export function $textInputContainer(errorMessage?: string): RestyleBoxProps {
  return {
    borderWidth: errorMessage ? 2 : 1,
    padding: 's16',
    borderColor: errorMessage ? 'error' : 'gray4',
    borderRadius: 's12'
  };
}

export const $textInputStyle = {
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium
};
