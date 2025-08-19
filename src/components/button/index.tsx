import { ActivityIndicator } from 'react-native';
import { Text } from '../text';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { TouchableOpacityBox } from '../restyle/touchable-opacity-box';
import { ButtonProps } from './props';

export function Button({
  title,
  loading,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const { colors } = useTheme<Theme>();

  return (
    <TouchableOpacityBox
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...touchableOpacityBoxProps}
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
    </TouchableOpacityBox>
  );
}
