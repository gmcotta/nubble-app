import {
  ActivityIndicator,
  Box,
  ProfileAvatar,
  Screen,
  Text
} from '@components';
import { useGetUserById } from '@domain';
import { MyProfileScreenProps } from './props';

export function MyProfileScreen({ route }: MyProfileScreenProps) {
  const { userId } = route.params;
  const { user, isLoading, isError } = useGetUserById(userId);

  return (
    <Screen>
      <Box>
        {isLoading ? <ActivityIndicator /> : null}
        {isError ? <Text>Erro ao carregar perfil</Text> : null}
      </Box>
      {user ? (
        <Box alignItems="center">
          <ProfileAvatar
            profileURL={user.profileUrl}
            size={64}
            borderRadius={24}
          />
          <Text preset="headingMedium" black marginTop="s16">
            {user.fullName}
          </Text>
          <Text preset="paragraphLarge" medium color="gray1" marginTop="s4">
            @{user.username}
          </Text>
        </Box>
      ) : null}
    </Screen>
  );
}
