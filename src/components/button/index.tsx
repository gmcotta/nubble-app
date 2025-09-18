import { ActivityIndicator, Text, TouchableOpacityBox } from '@components';
import { ButtonProps } from './props';
import { buttonVariants } from './variants';

export function Button({
  title,
  loading,
  variant = 'primary',
  disabled = false,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const activeVariant = buttonVariants[variant];
  const activeModifier = disabled ? 'disabled' : 'default';

  return (
    <TouchableOpacityBox
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      disabled={disabled || loading}
      {...activeVariant[activeModifier].container}
      {...touchableOpacityBoxProps}
    >
      {loading ? (
        <ActivityIndicator color={activeVariant[activeModifier].content} />
      ) : (
        <Text
          preset="paragraphMedium"
          bold
          color={activeVariant[activeModifier].content}
        >
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
