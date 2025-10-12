import { IconProps } from '@components';
import { AppBottomTabParamList } from '@routes';

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
