import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { Box, Icon, Text, TouchableOpacityBox } from '@components';
import { useAppSafeArea } from '@hooks';
import { AppBottomTabParamList } from '../AppTabNavigator/props';
import { mapScreenToProps } from './mapper';
import {
  tabBarContainerStyles,
  itemWrapperStyles,
  iconTextStyles
} from './styles';

export function AppTabBar({
  state,
  descriptors,
  navigation
}: BottomTabBarProps) {
  const { bottom } = useAppSafeArea();

  return (
    <Box {...tabBarContainerStyles(bottom)}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const tabItem =
          mapScreenToProps[route.name as keyof AppBottomTabParamList];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          });
        };

        return (
          <TouchableOpacityBox
            key={route.key}
            onPress={onPress}
            onLongPress={onLongPress}
            {...itemWrapperStyles(isFocused, options)}
          >
            <Icon
              color={isFocused ? 'primary' : 'backgroundContrast'}
              name={isFocused ? tabItem.icon.focused : tabItem.icon.unfocused}
            />
            <Text {...iconTextStyles(isFocused)}>{tabItem.label}</Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}
