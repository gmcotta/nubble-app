import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from './src/components/text';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text preset="headingLarge" italic style={{ color: 'red' }}>
          Olá mundo
        </Text>
        <Text preset="headingLarge">Olá mundo</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
