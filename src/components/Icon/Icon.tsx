import { Pressable } from 'react-native';

import { useRestyleTheme } from '@hooks';
import { IconProps } from './props';
import { iconRegistry } from './registry';

const ICON_SIZE = 20;

export function Icon({
  name,
  size = ICON_SIZE,
  color = 'backgroundContrast',
  notificationColor = 'carrotSecondary',
  onPress
}: IconProps) {
  const { colors } = useRestyleTheme();
  const SVGIcon = iconRegistry[name];

  const renderSVGIcon = () => (
    <SVGIcon
      size={size}
      color={colors[color]}
      notificationColor={colors[notificationColor]}
    />
  );

  if (onPress) {
    return (
      <Pressable onPress={onPress} hitSlop={10} testID={name}>
        {renderSVGIcon()}
      </Pressable>
    );
  }

  return renderSVGIcon();
}
