import { useState } from 'react';

import { Icon, Screen, Text, TextInput } from '@components';
import { useUserSearch } from '@domain';
import { useDebounce, useRestyleTheme } from '@hooks';
import { SearchScreenProps } from './props';

export function SearchScreen({}: SearchScreenProps) {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);
  const { colors } = useRestyleTheme();

  const { data: userList } = useUserSearch(debouncedSearch);

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
      {userList.map(user => (
        <Text key={user.id}>{user.username}</Text>
      ))}
    </Screen>
  );
}
