import { RefreshControl, ScrollView } from 'react-native';

import {
  ActivityIndicator,
  Box,
  ProfileAvatar,
  Screen,
  Text
} from '@components';
import { useGetUserById } from '@domain';
import { ProfileScreenProps } from './props';

export function ProfileScreen({ route }: ProfileScreenProps) {
  const { userId } = route.params;
  const { user, loading, error, isFetching, refetch } = useGetUserById(userId);

  return (
    <Screen canGoBack flex={1}>
      <Box>
        {loading ? <ActivityIndicator /> : null}
        {error ? <Text>Erro ao carregar perfil</Text> : null}
      </Box>
      {user ? (
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={isFetching ?? false}
              onRefresh={refetch}
            />
          }
        >
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
        </ScrollView>
      ) : null}
    </Screen>
  );
}
