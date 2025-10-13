import { SimpleLogo } from '@branding';
import { Box, Icon } from '@components';
import * as S from './styles';

export function HomeHeader() {
  return (
    <Box {...S.headerContainerStyles}>
      <SimpleLogo width={70} />
      <Box {...S.iconContainerStyles}>
        <Icon name="search" />
        <Icon name="bell" />
        <Icon name="chat" />
      </Box>
    </Box>
  );
}
