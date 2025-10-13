import { useNavigation } from '@react-navigation/native';

import { ProfileAvatar, Text, TouchableOpacityBox } from '@components';
import { PostHeaderProps } from './props';
import * as S from './styles';

export function PostHeader({ author }: PostHeaderProps) {
  const { profileURL, userName } = author;
  const navigation = useNavigation();

  return (
    <TouchableOpacityBox
      onPress={() => {
        navigation.navigate('ProfileScreen', {
          userId: author.id
        });
      }}
      {...S.profileBoxStyles}
    >
      <ProfileAvatar profileURL={profileURL} />
      <Text {...S.profileTextStyles}>{userName}</Text>
    </TouchableOpacityBox>
  );
}
