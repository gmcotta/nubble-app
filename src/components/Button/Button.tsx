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
  const color = activeVariant[activeModifier].content.color;

  return (
    <TouchableOpacityBox
      testID="button-container"
      disabled={disabled || loading}
      {...S.buttonContainerStyles}
      {...activeVariant[activeModifier].container}
      {...touchableOpacityBoxProps}
    >
      {loading ? (
        <ActivityIndicator
          testID="button-activity-indicator"
          color={activeVariant[activeModifier].content.color}
        />
      ) : (
        <Text
          {...S.buttonTextStyles(color)}
          {...activeVariant[activeModifier].content.textProps}
        >
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
