import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { Box, Icon, PermissionManager } from '@components';
import { useAppSafeArea } from '@hooks';
import { AppScreenProps } from '@routes';

import * as S from './styles';

export function CameraScreen({}: AppScreenProps<'CameraScreen'>) {
  const [flashOn, setFlashOn] = useState(false);
  const navigation = useNavigation();
  const { top } = useAppSafeArea();

  function toggleFlash() {
    setFlashOn(old => !old);
  }

  return (
    <PermissionManager
      description="Permita o Nubble acessar a câmera para poder tirar as fotos do post"
      permissionName="camera"
    >
      <Box {...S.ContainerStyles}>
        <Box {...S.CameraScreenStyles} />
        <Box {...S.ControlsContainerStyles}>
          <Box {...S.TopControlContainerStyles(top)}>
            <Icon
              size={20}
              color="grayWhite"
              name="arrowLeft"
              onPress={() => navigation.goBack()}
            />
            <Icon
              size={20}
              color="grayWhite"
              name={flashOn ? 'flashOff' : 'flashOn'}
              onPress={toggleFlash}
            />
            <Box width={20} />
          </Box>
          <Box {...S.BottomControlContainerStyles}>
            <Icon color="grayWhite" name="cameraClick" size={80} />
          </Box>
        </Box>
      </Box>
    </PermissionManager>
  );
}
