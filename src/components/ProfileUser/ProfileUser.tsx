import { useNavigation } from '@react-navigation/native';
import { GestureResponderEvent } from 'react-native';

import { PressableBox, ProfileAvatar, Text } from '@components';
import { ProfileUserProps } from './props';
import * as S from './styles';

export function ProfileUser({
  user,
  onPress,
  ...pressableProps
}: ProfileUserProps) {
  const navigation = useNavigation();

  function handleOnPress(event: GestureResponderEvent) {
    if (onPress) {
      onPress(event);
    }

    navigation.navigate('ProfileScreen', {
      userId: user.id
    });
  }

  return (
    <PressableBox
      onPress={handleOnPress}
      {...S.profileBoxStyles}
      {...pressableProps}
    >
      <ProfileAvatar profileURL={user.profileUrl} />
      <Text {...S.profileTextStyles}>{user.username}</Text>
    </PressableBox>
  );
}
