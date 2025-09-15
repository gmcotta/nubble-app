import { $fontFamily, $fontSizes } from '../../styles';
import { RestyleBoxProps } from '../restyle/box/props';

export const $textInputContainer: RestyleBoxProps = {
  borderWidth: 1,
  padding: 's16',
  borderColor: 'gray4',
  borderRadius: 's12'
};

export const $textInputStyle = {
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium
};
