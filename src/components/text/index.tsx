import React from 'react';
import { Text as RNText } from 'react-native';

import { $fontSizes } from './constants';
import { TextProps } from './props';

export function Text({
  children,
  preset = 'paragraphMedium',
  style,
  ...props
}: TextProps) {
  const presetStyle = $fontSizes[preset];

  return (
    <RNText style={[presetStyle, style]} {...props}>
      {children}
    </RNText>
  );
}
