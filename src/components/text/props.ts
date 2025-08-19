import { type ComponentProps } from 'react';
import { type TextStyle } from 'react-native';
import { Text as RestyleText } from '../restyle/text';

export type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

type RestyleTextProps = ComponentProps<typeof RestyleText>;

export interface TextProps extends RestyleTextProps {
  preset?: TextVariants;
  style?: Omit<TextStyle, 'fontSize' | 'lineHeight'>;
  black?: boolean;
  bold?: boolean;
  medium?: boolean;
  light?: boolean;
  italic?: boolean;
}
