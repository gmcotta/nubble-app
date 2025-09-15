import { IconProps } from './props';
import { iconRegistry } from './registry';
import { useAppTheme } from '../../hooks/useAppTheme';

export function Icon({
  name,
  size = 20,
  color = 'backgroundContrast',
  notificationColor = 'carrotSecondary'
}: IconProps) {
  const { colors } = useAppTheme();
  const SVGIcon = iconRegistry[name];

  return (
    <SVGIcon
      size={size}
      color={colors[color]}
      notificationColor={colors[notificationColor]}
    />
  );
}
