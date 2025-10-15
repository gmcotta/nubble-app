import { useNavigation } from '@react-navigation/native';

import { TouchableOpacityBox, Icon, Text, Box, ScreenProps } from '@components';
import * as C from './constants';
import * as S from './styles';

export function ScreenHeader({
  title,
  headerComponent
}: Pick<ScreenProps, 'title' | 'headerComponent'>) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Box {...S.headerContainerStyles}>
      <TouchableOpacityBox
        testID="screen-back-button"
        onPress={handleGoBack}
        {...S.backButtonStyles}
      >
        <Icon size={C.ICON_SIZE} name="arrowLeft" color="primary" />
        {!title && !headerComponent ? (
          <Text {...S.backButtonTextStyles}>
            {C.SCREEN_VALUES.BACK_BUTTON.TITLE}
          </Text>
        ) : null}
      </TouchableOpacityBox>
      {headerComponent ? headerComponent : null}
      {title ? <Text {...S.titleStyles}>{title}</Text> : null}
      {title ? <Box width={C.ICON_SIZE} /> : null}
    </Box>
  );
}
