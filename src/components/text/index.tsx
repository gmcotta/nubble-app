import React from 'react';
import { Text as RestyleText } from '../restyle/text';
import { $fontFamily, $fontSizes } from '../../styles';
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
    return italic ? $fontFamily.blackItalic : $fontFamily.black;
  }

  if (preset === 'paragraphLarge') {
    return italic ? $fontFamily.mediumItalic : $fontFamily.medium;
  }

  if (black) {
    return italic ? $fontFamily.blackItalic : $fontFamily.black;
  }

  if (bold) {
    return italic ? $fontFamily.boldItalic : $fontFamily.bold;
  }

  if (medium) {
    return italic ? $fontFamily.mediumItalic : $fontFamily.medium;
  }

  if (light) {
    return italic ? $fontFamily.lightItalic : $fontFamily.light;
  }

  if (italic) return $fontFamily.italic;

  return $fontFamily.regular;
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
  const presetStyle = $fontSizes[preset];
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
