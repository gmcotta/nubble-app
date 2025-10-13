import { Box, Icon, Text } from '@components';
import { ToastProps } from '@services';
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
