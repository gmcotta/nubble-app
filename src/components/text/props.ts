import { type TextStyle } from 'react-native';

import { RestyleTextProps } from '@components';

export type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

export interface TextProps extends RestyleTextProps {
  preset?: TextVariants;
  style?: Omit<TextStyle, 'fontSize' | 'lineHeight'>;
  black?: boolean;
  bold?: boolean;
  medium?: boolean;
  light?: boolean;
  italic?: boolean;
}
