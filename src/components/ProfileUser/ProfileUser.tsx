import { useNavigation } from '@react-navigation/native';
import { GestureResponderEvent } from 'react-native';

import { ProfileAvatar } from '../ProfileAvatar/ProfileAvatar';
import { Box } from '../Restyle/Box/RestyleBox';
import { PressableBox } from '../Restyle/PressableBox/PressableBox';
import { Text } from '../Text/Text';
import { ProfileUserProps } from './props';
import * as S from './styles';

export function ProfileUser({
  user,
  onPress,
  profileAvatarProps,
  rightComponent,
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
      <Box {...S.leftContainerStyles}>
        <ProfileAvatar {...profileAvatarProps} profileURL={user.profileUrl} />
        <Text {...S.profileTextStyles}>{user.username}</Text>
      </Box>
      {rightComponent && rightComponent}
    </PressableBox>
  );
}
