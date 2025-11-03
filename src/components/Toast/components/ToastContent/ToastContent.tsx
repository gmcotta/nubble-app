import { ToastProps } from '@services';
import { Icon } from '../../../Icon/Icon';
import { Box } from '../../../Restyle/Box/RestyleBox';
import { Text } from '../../../Text/Text';
import { mapTypeToIcon } from './mappers';
import * as S from './styles';

export function ToastContent({ toast }: { toast: ToastProps }) {
  const type = toast?.type ?? 'success';

  return (
    <Box {...S.toastContainerStyles}>
      <Icon {...mapTypeToIcon[type]} {...S.iconStyles} />
      <Text {...S.toastTextStyles}>{toast.message}</Text>
    </Box>
  );
}
