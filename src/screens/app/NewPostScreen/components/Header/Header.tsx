import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';

import { images } from '@assets';
import { Box, Button, Icon, Text } from '@components';
import * as C from './constants';
import { HeaderProps } from './props';
import * as S from './styles';

export function Header({ imageUri, imageWidth }: HeaderProps) {
  const navigation = useNavigation();

  function navigateToPublishPostScreen() {
    navigation.navigate('PublishPostScreen', { imageUri });
  }

  return (
    <Box>
      <ImageBackground
        source={imageUri ? { uri: imageUri } : images.imagePlaceholder}
        style={S.imageBackgroundStyles(imageWidth).imageBackground}
      >
        <Button
          variant="ghost"
          title={C.SCREEN_VALUES.BUTTON_TEXT}
          onPress={navigateToPublishPostScreen}
          {...S.buttonStyles}
        />
      </ImageBackground>
      <Box {...S.optionStyles}>
        <Text preset="headingSmall">{C.SCREEN_VALUES.GALLERY_TEXT}</Text>
        <Icon name="camera" />
      </Box>
    </Box>
  );
}
