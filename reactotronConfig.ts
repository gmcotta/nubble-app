import Reactotron, { ReactotronReactNative } from 'reactotron-react-native';
import mmkvPlugin from 'reactotron-react-native-mmkv';
import {
  QueryClientManager,
  reactotronReactQuery
} from 'reactotron-react-query';

import {
  initializeStorage,
  MMKVStorageImpl,
  mmkvStorageInstance
} from '@services';
import { queryClient } from './queryClient';

const queryClientManager = new QueryClientManager({
  queryClient
});

initializeStorage(MMKVStorageImpl);

Reactotron.configure({
  onDisconnect: () => {
    queryClientManager.unsubscribe();
  }
}) // controls connection & communication settings
  .use(reactotronReactQuery(queryClientManager))
  .use(mmkvPlugin<ReactotronReactNative>({ storage: mmkvStorageInstance }))
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
