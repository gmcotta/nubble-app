import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { ImageManipulator, SaveFormat } from 'expo-image-manipulator';
import { Platform } from 'react-native';

import { ImageForUpload, PhotoListPaginated } from './multimediaTypes';

async function getPhotos(cursor?: string): Promise<PhotoListPaginated> {
  const photoPage = await CameraRoll.getPhotos({
    first: 12,
    after: cursor
  });
  const photoList = photoPage.edges.map(edge => edge.node.image.uri);

  return {
    photoList,
    cursor: photoPage.page_info.end_cursor,
    hasNextPage: photoPage.page_info.has_next_page
  };
}

async function prepareImageForUpload(
  imageUri: string
): Promise<ImageForUpload | undefined> {
  try {
    const imageManipulator = await ImageManipulator.manipulate(
      prepareImageUri(imageUri)
    )
      .resize({
        width: 300
      })
      .renderAsync();
    const imageResult = await imageManipulator.saveAsync({
      format: SaveFormat.PNG,
      compress: 0.1
    });
    return {
      uri: imageResult.uri,
      name: Date.now().toString(),
      type: 'image/png'
    };
  } catch (e) {
    console.error(e);
    return undefined;
  }
}

function prepareImageUri(imageUri: string): string {
  if (Platform.OS !== 'android') {
    return imageUri;
  }

  if (imageUri.startsWith('file://') || imageUri.startsWith('content://')) {
    return imageUri;
  }

  return `file://${imageUri}`;
}

export const multimediaService = {
  getPhotos,
  prepareImageForUpload,
  prepareImageUri
};
