import { ActivityIndicator, Text, TouchableOpacityBox } from '@components';
import { ButtonProps } from './props';
import * as S from './styles';
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
  const color = activeVariant[activeModifier].content;

  return (
    <TouchableOpacityBox
      {...S.buttonContainerStyles}
      {...activeVariant[activeModifier].container}
      {...touchableOpacityBoxProps}
    >
      {loading ? (
        <ActivityIndicator color={activeVariant[activeModifier].content} />
      ) : (
        <Text {...S.buttonTextStyles(color)}>{title}</Text>
      )}
    </TouchableOpacityBox>
  );
}
