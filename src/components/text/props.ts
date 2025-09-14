import { type TextStyle } from 'react-native';
import { TextProps as RestyleTextProps } from '../restyle/text/props';

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
