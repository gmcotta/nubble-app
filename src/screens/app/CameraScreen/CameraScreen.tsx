import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Camera,
  Templates,
  useCameraDevice,
  useCameraFormat
} from 'react-native-vision-camera';

import { Box, Icon, PermissionManager } from '@components';
import { useAppSafeArea, useAppState } from '@hooks';
import { AppScreenProps } from '@routes';
import { multimediaService } from '@services';
import * as C from './constants';
import * as S from './styles';

export function CameraScreen({}: AppScreenProps<'CameraScreen'>) {
  const cameraRef = useRef<Camera>(null);

  const [flashOn, setFlashOn] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const navigation = useNavigation();
  const { top } = useAppSafeArea();

  const device = useCameraDevice('back', {
    physicalDevices: [
      'telephoto-camera',
      'ultra-wide-angle-camera',
      'wide-angle-camera'
    ]
  });
  const format = useCameraFormat(device, Templates.Instagram);
  const isFocused = useIsFocused();
  const appState = useAppState();
  const isActive = isFocused && appState === 'active';

  function toggleFlash() {
    setFlashOn(old => !old);
  }

  async function takePhoto() {
    if (!cameraRef.current) return;
    const photoFile = await cameraRef.current.takePhoto({
      flash: flashOn ? 'on' : 'off'
    });
    navigation.navigate('PublishPostScreen', {
      imageUri: multimediaService.prepareImageUri(photoFile.path)
    });
  }

  return (
    <PermissionManager
      description={C.SCREEN_VALUES.PERMISSION_DESCRIPTION}
      permissionName="camera"
    >
      <Box {...S.ContainerStyles}>
        {device !== undefined ? (
          <Camera
            ref={cameraRef}
            device={device}
            format={format}
            isActive={isActive}
            photo
            photoQualityBalance="quality"
            onInitialized={() => setIsReady(true)}
            style={StyleSheet.absoluteFill}
          />
        ) : null}
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
            {isReady ? (
              <Icon
                color="grayWhite"
                name="cameraClick"
                size={80}
                onPress={takePhoto}
              />
            ) : null}
          </Box>
        </Box>
      </Box>
    </PermissionManager>
  );
}
