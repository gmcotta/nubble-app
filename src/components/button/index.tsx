import { Text } from '../text';
import { TouchableOpacityBox } from '../restyle/touchable-opacity-box';
import { ButtonProps, ButtonUI, ButtonVariants } from './props';
import { ActivityIndicator } from '../activity-indicator';

export function Button({
  title,
  loading,
  variant = 'primary',
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonVariants: Record<ButtonVariants, ButtonUI> = {
    primary: {
      container: {
        backgroundColor: 'primary'
      },
      content: 'primaryContrast'
    },
    outline: {
      container: {
        borderWidth: 1,
        borderColor: 'primary'
      },
      content: 'primary'
    }
  };

  const activeVariant = buttonVariants[variant];

  return (
    <TouchableOpacityBox
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...activeVariant.container}
      {...touchableOpacityBoxProps}
    >
      {loading ? (
        <ActivityIndicator color={activeVariant.content} />
      ) : (
        <Text preset="paragraphMedium" bold color={activeVariant.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
