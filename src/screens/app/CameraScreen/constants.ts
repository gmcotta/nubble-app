import { Dimensions } from 'react-native';

export const CAMERA_VIEW = Dimensions.get('window').width;
export const CONTROL_HEIGHT =
  (Dimensions.get('window').height - CAMERA_VIEW) / 2;
