import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

import { initializeStorage } from '../services/Storage';
import { jestInMemoryStorage } from '../services/Storage/implementations/jest/inMemoryStorage';

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: jest.fn()
    })
  };
});

initializeStorage(jestInMemoryStorage);
