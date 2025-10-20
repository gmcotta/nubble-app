import { ImageStyle, StyleProp } from 'react-native';

import * as C from './constants';

const ITEM_WIDTH = C.SCREEN_WIDTH / C.NUM_COLUMNS;

export const imageStyles: StyleProp<ImageStyle> = {
  width: ITEM_WIDTH,
  height: ITEM_WIDTH
};
