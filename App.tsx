import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from './src/components/text';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text preset="headingLarge" style={{ color: 'red' }}>
          Olá mundo
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
