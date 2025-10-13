import { TextInputProps } from 'react-native';

import { fontFamilyValues } from './fontFamily';
import { fontSizesValues } from './fontSize';

export const textInputStyles: TextInputProps['style'] = {
  padding: 0,
  fontFamily: fontFamilyValues.regular,
  flex: 1,
  ...fontSizesValues.paragraphMedium
};
