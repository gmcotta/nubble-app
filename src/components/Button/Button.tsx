import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator';
import { TouchableOpacityBox } from '../Restyle/TouchableOpacityBox/TouchableOpacityBox';
import { Text } from '../Text/Text';
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
