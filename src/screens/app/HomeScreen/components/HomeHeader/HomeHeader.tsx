import { useNavigation } from '@react-navigation/native';
import { SimpleLogo } from '@branding';
import { Box, Icon } from '@components';
import * as S from './styles';

export function HomeHeader() {
  const navigation = useNavigation();

  function navigatetoSearchScreen() {
    navigation.navigate('SearchScreen');
  }

  return (
    <Box {...S.headerContainerStyles}>
      <SimpleLogo width={70} />
      <Box {...S.iconContainerStyles}>
        <Icon name="search" onPress={navigatetoSearchScreen} />
        <Icon name="bell" />
        <Icon name="chat" />
      </Box>
    </Box>
  );
}
