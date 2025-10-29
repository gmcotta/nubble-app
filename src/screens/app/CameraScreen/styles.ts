import { StyleSheet } from 'react-native';

import { RestyleBoxProps } from '@components';
import * as C from './constants';

export const ContainerStyles: RestyleBoxProps = {
  flex: 1
};

export const CameraScreenStyles: RestyleBoxProps = {
  backgroundColor: 'grayWhite',
  style: StyleSheet.absoluteFill
};

export const ControlsContainerStyles: RestyleBoxProps = {
  flex: 1,
  justifyContent: 'space-between'
};

export function TopControlContainerStyles(top: number): RestyleBoxProps {
  return {
    backgroundColor: 'black60',
    height: C.CONTROL_HEIGHT,
    style: { paddingTop: top },
    paddingHorizontal: 's24',
    flexDirection: 'row',
    justifyContent: 'space-between'
  };
}

export const BottomControlContainerStyles: RestyleBoxProps = {
  backgroundColor: 'black60',
  height: C.CONTROL_HEIGHT,
  alignItems: 'center',
  justifyContent: 'center'
};
