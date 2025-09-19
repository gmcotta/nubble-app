import { AppBottomTabParamList } from '@routes/tabs';
import { IconProps } from '@components';

export type MapperProps = Record<
  keyof AppBottomTabParamList,
  {
    label: string;
    icon: {
      focused: IconProps['name'];
      unfocused: IconProps['name'];
    };
  }
>;
