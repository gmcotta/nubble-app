import { useNavigation } from '@react-navigation/native';

import { TouchableOpacityBox, Icon, Text, Box, ScreenProps } from '@components';
import * as C from './constants';
import * as S from './styles';

export function ScreenHeader({ title }: Pick<ScreenProps, 'title'>) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Box {...S.headerContainerStyles}>
      <TouchableOpacityBox onPress={handleGoBack} {...S.backButtonStyles}>
        <Icon size={C.ICON_SIZE} name="arrowLeft" color="primary" />
        {!title ? (
          <Text {...S.backButtonTextStyles}>
            {C.SCREEN_VALUES.backButton.title}
          </Text>
        ) : null}
      </TouchableOpacityBox>
      {title ? <Text {...S.titleStyles}>{title}</Text> : null}
      {title ? <Box width={C.ICON_SIZE} /> : null}
    </Box>
  );
}
