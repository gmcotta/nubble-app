import { IconProps } from '@components';
import { ToastType } from '@services';

export const mapTypeToIcon: Record<ToastType, IconProps> = {
  success: {
    color: 'success',
    name: 'checkRound'
  },
  error: {
    color: 'error',
    name: 'errorRound'
  }
};
