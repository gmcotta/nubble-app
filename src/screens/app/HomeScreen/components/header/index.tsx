import { Box, Icon } from '@components';
import { useAppSafeArea } from '@hooks';
import * as S from './styles';

export function HomeHeader() {
  const { top } = useAppSafeArea();

  return (
    <Box {...S.headerContainerStyles(top)}>
      <Box width={70} height={16} backgroundColor="carrotSecondary" />
      <Box {...S.iconContainerStyles}>
        <Icon name="search" />
        <Icon name="bell" />
        <Icon name="chat" />
      </Box>
    </Box>
  );
}
