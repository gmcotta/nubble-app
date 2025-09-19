import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { ViewProps } from 'react-native';
import {
  RestyleBoxProps,
  TextProps,
  TouchableOpacityBoxProps
} from '@components';
import { shadowProps } from '@styles';

export function tabBarContainerStyles(
  bottom: number
): RestyleBoxProps & { style: ViewProps } {
  return {
    flexDirection: 'row',
    paddingTop: 's12',
    backgroundColor: 'background',
    style: {
      paddingBottom: bottom,
      ...shadowProps
    }
  };
}

export function itemWrapperStyles(
  isFocused: boolean,
  options: BottomTabNavigationOptions
): TouchableOpacityBoxProps {
  return {
    activeOpacity: 1,
    alignItems: 'center',
    style: { flex: 1 },
    accessibilityRole: 'button',
    accessibilityState: isFocused ? { selected: true } : {},
    accessibilityLabel: options.tabBarAccessibilityLabel
  };
}

export function iconTextStyles(isFocused: boolean): TextProps {
  return {
    medium: true,
    preset: 'paragraphCaption',
    color: isFocused ? 'primary' : 'backgroundContrast',
    marginTop: 's4'
  };
}
