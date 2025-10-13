import { ActivityIndicator, Box, Text } from '@components';
import * as C from './constants';
import { HomeEmptyProps } from './props';
import * as S from './styles';

export function HomeEmpty({ loading, error }: HomeEmptyProps) {
  if (loading) {
    return (
      <Box {...S.boxStyles}>
        <ActivityIndicator color="primary" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box {...S.boxStyles}>
        <Text>{C.SCREEN_VALUES.ERROR_TEXT}</Text>
      </Box>
    );
  }

  return (
    <Box {...S.boxStyles}>
      <Text>{C.SCREEN_VALUES.EMPTY_TEXT}</Text>
    </Box>
  );
}
