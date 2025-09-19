import { Screen, Text } from '@components';
import { MyProfileScreenProps } from './props';

export function MyProfileScreen({}: MyProfileScreenProps) {
  return (
    <Screen>
      <Text preset="headingSmall">My Profile Screen</Text>
    </Screen>
  );
}
