import { TextStyle, type TextProps as RNTextProps } from 'react-native';

export type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

export interface TextProps extends RNTextProps {
  preset?: TextVariants;
  style?: Omit<TextStyle, 'fontSize' | 'lineHeight'>;
}
