import { FlatList, ListRenderItemInfo } from 'react-native';

import { Box, ProfileUser, Text } from '@components';
import { User } from '@domain';
import { useSearchHistoryService } from '@services';

function renderItem({ item }: ListRenderItemInfo<User>) {
  return (
    <ProfileUser
      user={{
        id: item.id,
        profileUrl: item.profileUrl,
        username: item.username
      }}
    />
  );
}

export function SearchHistory() {
  const userList = useSearchHistoryService();
  return (
    <Box>
      <FlatList
        data={userList}
        renderItem={renderItem}
        ListHeaderComponent={
          <Text preset="headingMedium">Buscas recentes</Text>
        }
        keyExtractor={item => item.username}
      />
    </Box>
  );
}
