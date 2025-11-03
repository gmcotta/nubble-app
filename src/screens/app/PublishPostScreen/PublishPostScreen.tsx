import { useState } from 'react';
import { Image } from 'react-native';

import { Button, Screen, Text, TextInput } from '@components';
import { usePostCreate } from '@domain';
import { useToastActionsService } from '@services';
import * as C from './constants';
import { PublishPostScreenProps } from './props';
import * as S from './styles';

export function PublishPostScreen({
  route,
  navigation
}: PublishPostScreenProps) {
  const { imageUri } = route.params;

  const [description, setDescription] = useState('');
  const { showToast } = useToastActionsService();
  const { createPost, isLoading } = usePostCreate({
    onSuccess: () => {
      showToast({ message: 'Post publicado!', type: 'success' });
      navigation.navigate('AppTabNavigator', { screen: 'HomeScreen' });
    }
  });

  async function publishPost() {
    if (!imageUri) {
      showToast({ message: 'Sem imagem para publicar!', type: 'error' });
      return;
    }

    await createPost({ text: description, imageUri });
  }

  return (
    <Screen scrollable canGoBack title={C.SCREEN_VALUES.TITLE}>
      <Image source={{ uri: imageUri }} style={S.imageStyles} />
      <Text preset="headingSmall" {...S.headingStyles}>
        {C.SCREEN_VALUES.HEADING}
      </Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder={C.SCREEN_VALUES.PLACEHOLDER_TEXT}
        containerProps={S.textInputContainerStyles}
      />
      <Button
        title={C.SCREEN_VALUES.BUTTON_TEXT}
        onPress={publishPost}
        loading={isLoading}
        disabled={description.length < 1}
        {...S.buttonStyles}
      />
    </Screen>
  );
}
