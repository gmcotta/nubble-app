import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { AppBottomTabParamList } from '@routes/tabs';
import { Box, Icon, Text, TouchableOpacityBox } from '@components';
import { mapScreenToProps } from './mapper';

export function AppTabBar({
  state,
  descriptors,
  navigation
}: BottomTabBarProps) {
  return (
    <Box flexDirection="row">
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
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            activeOpacity={1}
            alignItems="center"
            key={route.key}
          >
            <Icon
              color={isFocused ? 'primary' : 'backgroundContrast'}
              name={isFocused ? tabItem.icon.focused : tabItem.icon.unfocused}
            />
            <Text
              medium
              preset="paragraphCaption"
              color={isFocused ? 'primary' : 'backgroundContrast'}
            >
              {tabItem.label}
            </Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}
