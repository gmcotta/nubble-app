import { useState } from 'react';
import { Image } from 'react-native';

import { Button, Screen, Text, TextInput } from '@components';
import * as C from './constants';
import { PublishPostScreenProps } from './props';
import * as S from './styles';

export function PublishPostScreen({ route }: PublishPostScreenProps) {
  const [description, setDescription] = useState('');
  const { imageUri } = route.params;
  return (
    <Screen scrollable canGoBack title={C.title}>
      <Image source={{ uri: imageUri }} style={S.imageStyles} />
      <Text preset="headingSmall" {...S.headingStyles}>
        {C.headingText}
      </Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder={C.textInputPlaceholderText}
        containerProps={S.textInputContainerStyles}
      />
      <Button title={C.buttonText} marginTop="s56" />
    </Screen>
  );
}
