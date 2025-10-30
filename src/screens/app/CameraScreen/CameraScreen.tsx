import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
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
import * as C from './constants';
import * as S from './styles';

export function CameraScreen({}: AppScreenProps<'CameraScreen'>) {
  const [flashOn, setFlashOn] = useState(false);
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

  return (
    <PermissionManager
      description={C.SCREEN_VALUES.PERMISSION_DESCRIPTION}
      permissionName="camera"
    >
      <Box {...S.ContainerStyles}>
        {device !== undefined ? (
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            format={format}
            isActive={isActive}
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
            <Icon color="grayWhite" name="cameraClick" size={80} />
          </Box>
        </Box>
      </Box>
    </PermissionManager>
  );
}
