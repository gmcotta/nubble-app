import { Linking, Platform } from 'react-native';

import { ActivityIndicator, Box, Button, Screen, Text } from '@components';
import { usePermission } from '@services';
import * as C from './constants';
import { PermissionManagerProps } from './props';
import * as S from './styles';

export function PermissionManager({
  description,
  permissionName,
  children
}: PermissionManagerProps) {
  const { status, isLoading } = usePermission(permissionName);

  if (status === 'granted') return children;

  return (
    <Screen canGoBack style={S.screenStyles}>
      <Box {...S.flexContainerStyles}>
        <Text preset="headingSmall" {...S.descriptionStyles}>
          {description}
        </Text>
        {isLoading ? <ActivityIndicator color="primary" /> : null}
        {status === 'unavailable' ? (
          <Text
            preset="paragraphMedium"
            color="error"
            bold
            {...S.androidDisclaimerStyles}
          >
            {C.SCREEN_VALUES.UNAVAILABLE_RESOURCE}
          </Text>
        ) : null}
        {status === 'never_ask_again' ? (
          <Box>
            {Platform.OS === 'android' ? (
              <Text
                preset="paragraphMedium"
                color="error"
                bold
                {...S.androidDisclaimerStyles}
              >
                {C.SCREEN_VALUES.ANDROID_DISCLAIMER}
              </Text>
            ) : null}
            <Button
              title={C.SCREEN_VALUES.BUTTON_TITLE}
              onPress={() => Linking.openSettings()}
              {...S.buttonStyles}
            />
          </Box>
        ) : null}
      </Box>
    </Screen>
  );
}
