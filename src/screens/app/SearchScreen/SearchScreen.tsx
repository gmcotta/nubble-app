import { useState } from 'react';
import { Icon, Screen, Text, TextInput } from '@components';
import { useRestyleTheme } from '@hooks';
import { SearchScreenProps } from './props';

export function SearchScreen({}: SearchScreenProps) {
  const [search, setSearch] = useState('');
  const { colors } = useRestyleTheme();

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
      <Text>Search Screen</Text>
    </Screen>
  );
}
