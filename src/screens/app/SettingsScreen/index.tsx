import { Button, Screen } from '@components';
import { useAuthSignOut } from '@domain';
import { SettingsScreenProps } from './props';

export function SettingsScreen({}: SettingsScreenProps) {
  const { isLoading, signOut } = useAuthSignOut();

  return (
    <Screen canGoBack title="Configurações">
      <Button
        loading={isLoading}
        marginTop="s48"
        title="Sair da conta"
        onPress={signOut}
      />
    </Screen>
  );
}
