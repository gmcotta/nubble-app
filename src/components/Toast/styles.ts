import { IconProps, RestyleBoxProps, TextProps } from '@components';
import { shadowProps } from '@styles';
import * as C from './constants';

export const toastContainerStyles: RestyleBoxProps = {
  backgroundColor: 'background',
  position: 'absolute',
  alignSelf: 'center',
  bottom: 100,
  flexDirection: 'row',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's16',
  opacity: 0.95,
  maxWidth: C.TOAST_MAX_WIDTH,
  style: { ...shadowProps }
};

export const iconStyles: Omit<IconProps, 'name'> = {
  size: C.ICON_SIZE,
  color: 'greenSuccess'
};

export const toastTextStyles: TextProps = {
  preset: 'paragraphMedium',
  bold: true,
  marginLeft: 's16',
  style: {
    flexShrink: 1
  }
};
