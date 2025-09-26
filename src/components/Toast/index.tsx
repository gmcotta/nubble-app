import { useEffect } from 'react';
import { Box, Icon, Text } from '@components';
import { useToast } from '@services';
import * as S from './styles';

export function Toast() {
  const { toast, hideToast } = useToast();

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hideToast();
      }, toast.duration ?? 3000);
    }
  }, [toast, hideToast]);

  if (!toast) return null;

  return (
    <Box {...S.toastContainerStyles}>
      <Icon name="checkRound" {...S.iconStyles} />
      <Text {...S.toastTextStyles}>{toast.message}</Text>
    </Box>
  );
}
