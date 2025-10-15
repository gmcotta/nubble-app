import { useNavigation } from '@react-navigation/native';

import { ProfileAvatar, Text, TouchableOpacityBox } from '@components';
import { ProfileUserProps } from './props';
import * as S from './styles';

export function ProfileUser({ user }: ProfileUserProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacityBox
      onPress={() => {
        navigation.navigate('ProfileScreen', {
          userId: user.id
        });
      }}
      {...S.profileBoxStyles}
    >
      <ProfileAvatar profileURL={user.profileUrl} />
      <Text {...S.profileTextStyles}>{user.username}</Text>
    </TouchableOpacityBox>
  );
}
