import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from './src/components/text';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Button } from './src/components/button';
import { View } from 'react-native';
import { Icon } from './src/components/icon';
import { iconRegistry } from './src/components/icon/registry';
import { IconName } from './src/components/icon/props';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView>
          <View style={{ paddingHorizontal: 24, gap: 12 }}>
            <Text preset="headingLarge" italic>
              Olá mundo
            </Text>
            <Text preset="headingLarge">Olá mundo</Text>
            <Button title="Entrar" loading={false} />
            <Button title="Outline" loading={false} variant="outline" />
            <Button disabled title="Entrar" loading={false} />
            <Button
              disabled
              title="Outline"
              loading={false}
              variant="outline"
            />
            <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
              {Object.keys(iconRegistry).map(iconName => (
                <Icon key={iconName} name={iconName as IconName} />
              ))}
            </View>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
