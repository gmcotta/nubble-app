import { Box, Icon, Text } from '@components';
import * as S from './styles';

export function Toast() {
  return (
    <Box {...S.toastContainerStyles}>
      <Icon name="checkRound" {...S.iconStyles} />
      <Text {...S.toastTextStyles}>Toasty!</Text>
    </Box>
  );
}
