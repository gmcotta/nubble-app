import { ThemeColors } from '../../theme/theme';
import { iconRegistry } from './registry';

export type IconType = typeof iconRegistry;
export type IconName = keyof IconType;

export interface BaseIconProps {
  size: number;
  color: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
}
