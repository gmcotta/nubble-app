import { RestyleBoxProps } from '@components';
import { $fontFamily, $fontSizes } from '@styles';


export function $textInputContainer(errorMessage?: string): RestyleBoxProps {
  return {
    borderWidth: errorMessage ? 2 : 1,
    padding: 's16',
    borderColor: errorMessage ? 'error' : 'gray4',
    borderRadius: 's12',
    flexDirection: 'row',
    alignItems: 'center'
  };
}

export const $textInputStyle = {
  padding: 0,
  fontFamily: $fontFamily.regular,
  flex: 1,
  ...$fontSizes.paragraphMedium
};
