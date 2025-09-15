import { IconProps } from './props';
import { iconRegistry } from './registry';
import { useRestyleTheme } from '../../hooks/useRestyleTheme';

export function Icon({
  name,
  size = 20,
  color = 'backgroundContrast',
  notificationColor = 'carrotSecondary'
}: IconProps) {
  const { colors } = useRestyleTheme();
  const SVGIcon = iconRegistry[name];

  return (
    <SVGIcon
      size={size}
      color={colors[color]}
      notificationColor={colors[notificationColor]}
    />
  );
}
