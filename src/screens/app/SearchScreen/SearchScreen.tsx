import { useState } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { Icon, ProfileUser, Screen, TextInput } from '@components';
import { User, useUserSearch } from '@domain';
import { useDebounce, useRestyleTheme } from '@hooks';
import { useSearchHistoryActionsService } from '@services';
import { SearchHistory } from './components';
import { SearchScreenProps } from './props';

function renderItem(
  { item }: ListRenderItemInfo<User>,
  addUser: (user: User) => void
) {
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
      onPress={() => {
        addUser(item);
      }}
    />
  );
}

export function SearchScreen({}: SearchScreenProps) {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);
  const { colors } = useRestyleTheme();

  const { data: userList } = useUserSearch(debouncedSearch);
  const { addUser } = useSearchHistoryActionsService();

  return (
    <Screen
      canGoBack
      headerComponent={
        <TextInput
          value={search}
          onChangeText={setSearch}
          leftComponent={<Icon color="gray3" name="search" />}
          placeholderTextColor={colors.gray2}
          placeholder="Digite sua busca"
        />
      }
    >
      {search.length === 0 ? (
        <SearchHistory />
      ) : (
        <FlatList
          data={userList}
          keyExtractor={item => item.username}
          renderItem={info => renderItem(info, addUser)}
        />
      )}
    </Screen>
  );
}
