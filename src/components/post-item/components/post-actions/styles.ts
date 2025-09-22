import {
  RestyleBoxProps,
  TextProps,
  TouchableOpacityBoxProps
} from '@components';

export const itemContainerStyles: TouchableOpacityBoxProps = {
  flexDirection: 'row',
  alignItems: 'center'
};

export const itemTextStyles: TextProps = {
  preset: 'paragraphSmall',
  marginLeft: 's4'
};

export const postActionsContainerStyles: RestyleBoxProps = {
  flexDirection: 'row',
  marginTop: 's16',
  gap: 's24'
};
