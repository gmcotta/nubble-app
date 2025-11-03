import { fontFamilyValues, fontSizesValues } from '@styles';
import { RestyleText } from '../Restyle/Text/RestyleText';
import { TextProps, TextVariants } from './props';

function getFontFamily(
  preset: TextVariants,
  black?: boolean,
  bold?: boolean,
  medium?: boolean,
  light?: boolean,
  italic?: boolean
) {
  if (
    preset === 'headingLarge' ||
    preset === 'headingMedium' ||
    preset === 'headingSmall'
  ) {
    return italic ? fontFamilyValues.blackItalic : fontFamilyValues.black;
  }

  if (preset === 'paragraphLarge') {
    return italic ? fontFamilyValues.mediumItalic : fontFamilyValues.medium;
  }

  if (black) {
    return italic ? fontFamilyValues.blackItalic : fontFamilyValues.black;
  }

  if (bold) {
    return italic ? fontFamilyValues.boldItalic : fontFamilyValues.bold;
  }

  if (medium) {
    return italic ? fontFamilyValues.mediumItalic : fontFamilyValues.medium;
  }

  if (light) {
    return italic ? fontFamilyValues.lightItalic : fontFamilyValues.light;
  }

  if (italic) return fontFamilyValues.italic;

  return fontFamilyValues.regular;
}

export function Text({
  children,
  preset = 'paragraphMedium',
  style,
  black,
  bold,
  medium,
  light,
  italic,
  ...restyleTextProps
}: TextProps) {
  const presetStyle = fontSizesValues[preset];
  const fontFamily = getFontFamily(preset, black, bold, medium, light, italic);

  return (
    <RestyleText
      style={[presetStyle, { fontFamily }, style]}
      color="backgroundContrast"
      {...restyleTextProps}
    >
      {children}
    </RestyleText>
  );
}
