import { IconProps, RestyleBoxProps, TextProps } from '@components';
import { ToastPosition } from '@services';
import { shadowProps } from '@styles';
import * as C from '../../constants';

export function toastContainerStyles(position: ToastPosition): RestyleBoxProps {
  return {
    backgroundColor: 'background',
    position: 'absolute',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 's16',
    borderRadius: 's16',
    opacity: 0.95,
    maxWidth: C.TOAST_MAX_WIDTH,
    style: { ...shadowProps, [position]: 100 }
  };
}

export const iconStyles: Omit<IconProps, 'name'> = {
  size: C.ICON_SIZE
};

export const toastTextStyles: TextProps = {
  preset: 'paragraphMedium',
  bold: true,
  marginLeft: 's16',
  style: {
    flexShrink: 1
  }
};
