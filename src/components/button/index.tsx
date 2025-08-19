import { ActivityIndicator } from 'react-native';
import { Text } from '../text';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { Box } from '../box';

interface ButtonProps {
  title: string;
  loading?: boolean;
}

export function Button({ title, loading }: ButtonProps) {
  const { colors } = useTheme<Theme>();

  return (
    <Box
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text
          preset="paragraphMedium"
          bold
          style={{ color: colors.primaryContrast }}
        >
          {title}
        </Text>
      )}
      {/* <TouchableOpacity style={{ backgroundColor: colors.primary }}>
      </TouchableOpacity> */}
    </Box>
  );
}
