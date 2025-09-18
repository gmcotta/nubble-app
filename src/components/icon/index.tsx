import { Pressable } from 'react-native';

import { useRestyleTheme } from '@hooks';
import { IconProps } from './props';
import { iconRegistry } from './registry';

export function Icon({
  name,
  size = 20,
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
      <Pressable onPress={onPress} hitSlop={10}>
        {renderSVGIcon()}
      </Pressable>
    );
  }

  return renderSVGIcon();
}
