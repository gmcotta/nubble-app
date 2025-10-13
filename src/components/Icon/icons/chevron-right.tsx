import { Svg, Path } from 'react-native-svg';

import { BaseIconProps } from '../props';

export function ChevronRightIcon({ size, color }: BaseIconProps) {
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <Path
        d="M7 4L14 10L7 16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
