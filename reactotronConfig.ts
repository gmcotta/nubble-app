import Reactotron from 'reactotron-react-native';
import {
  QueryClientManager,
  reactotronReactQuery
} from 'reactotron-react-query';

import { queryClient } from './queryClient';

const queryClientManager = new QueryClientManager({
  queryClient
});

Reactotron.configure({
  onDisconnect: () => {
    queryClientManager.unsubscribe();
  }
}) // controls connection & communication settings
  .use(reactotronReactQuery(queryClientManager))
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
