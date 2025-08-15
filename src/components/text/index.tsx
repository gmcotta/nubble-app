import React from 'react';
import { Text as RNText } from 'react-native';

import { $fontFamily, $fontSizes } from './constants';
import { TextProps, TextVariants } from './props';

function getFontFamily(
  preset: TextVariants,
  black?: boolean,
  bold?: boolean,
  medium?: boolean,
  light?: boolean,
  italic?: boolean,
) {
  if (preset === 'headingLarge' || 'headingMedium' || 'headingSmall') {
    return italic ? $fontFamily.blackItalic : $fontFamily.bold;
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
  ...props
}: TextProps) {
  const presetStyle = $fontSizes[preset];

  return (
    <RNText
      style={[
        presetStyle,
        {
          fontFamily: getFontFamily(preset, black, bold, medium, light, italic),
        },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
}
