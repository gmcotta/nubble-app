import { ActivityIndicator, Box, Text } from '@components';
import { screenValues } from './constants';
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
        <Text>{screenValues.errorText}</Text>
      </Box>
    );
  }

  return (
    <Box {...S.boxStyles}>
      <Text>{screenValues.emptyText}</Text>
    </Box>
  );
}
