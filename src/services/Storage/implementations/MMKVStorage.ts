import { MMKV } from 'react-native-mmkv';

import { Storage } from '../storageTypes';

export const mmkvStorageInstance = new MMKV();

export const MMKVStorageImpl: Storage = {
  getItem: async key => {
    const item = mmkvStorageInstance.getString(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  },
  setItem: async (key, value) => {
    return mmkvStorageInstance.set(key, JSON.stringify(value));
  },
  removeItem: async key => {
    return mmkvStorageInstance.delete(key);
  }
};
