import { Svg, Path, Circle } from 'react-native-svg';

import { BaseIconProps } from '../props';

export function ErrorRoundIcon({ size = 48, color }: BaseIconProps) {
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <Circle cx={size / 2} cy={size / 2} r={size / 2} fill={color} />
      <Path
        d="M15 15.0004L31.2279 31.9996M15.7728 32L32 15"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </Svg>
  );
}
