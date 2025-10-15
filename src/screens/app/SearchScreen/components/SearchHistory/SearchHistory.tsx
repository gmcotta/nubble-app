import { FlatList, ListRenderItemInfo } from 'react-native';

import { Box, Icon, ProfileUser, Text } from '@components';
import { User } from '@domain';
import {
  useSearchHistoryActionsService,
  useSearchHistoryService
} from '@services';

function renderItem(
  { item }: ListRenderItemInfo<User>,
  removeUser: (userId: number) => void
) {
  function handleDelete() {
    removeUser(item.id);
  }

  return (
    <ProfileUser
      user={{
        id: item.id,
        profileUrl: item.profileUrl,
        username: item.username
      }}
      profileAvatarProps={{
        size: 48
      }}
      rightComponent={<Icon name="trash" onPress={handleDelete} />}
    />
  );
}

export function SearchHistory() {
  const userList = useSearchHistoryService();
  const { removeUser } = useSearchHistoryActionsService();
  return (
    <Box>
      <FlatList
        data={userList}
        renderItem={item => renderItem(item, removeUser)}
        ListHeaderComponent={
          <Text preset="headingMedium" marginBottom="s16">
            Buscas recentes
          </Text>
        }
        keyExtractor={item => item.username}
      />
    </Box>
  );
}
