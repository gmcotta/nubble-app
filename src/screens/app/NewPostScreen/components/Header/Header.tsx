import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';

import { Box, Button, Icon, Text } from '@components';
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
        source={{ uri: imageUri }}
        style={S.imageBackgroundStyles(imageWidth).imageBackground}
      >
        <Button
          variant="ghost"
          title="Escolher essa"
          marginBottom="s24"
          onPress={navigateToPublishPostScreen}
        />
      </ImageBackground>
      <Box {...S.optionStyles}>
        <Text preset="headingSmall">Sua galeria</Text>
        <Icon name="camera" />
      </Box>
    </Box>
  );
}
