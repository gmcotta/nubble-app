import { RestyleBoxProps } from '@components';

export const keyboardAvoidingViewStyles = {
  flex: 1
};

export const initialboxStyles = (
  noPaddingHorizontal: boolean
): RestyleBoxProps => {
  return {
    paddingHorizontal: noPaddingHorizontal ? undefined : 's24'
  };
};

export const headerBoxStyles = (
  noPaddingHorizontal: boolean
): RestyleBoxProps => {
  return {
    paddingHorizontal: noPaddingHorizontal ? 's24' : undefined
  };
};
