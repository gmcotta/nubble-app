import { Storage } from '../../storageTypes';

let storage: Record<string, any> = {};

export const jestInMemoryStorage: Storage = {
  getItem: jest.fn(async key => {
    if (key in storage) {
      return storage[key];
    }
    return null;
  }),
  removeItem: jest.fn(async key => {
    if (key in storage) {
      delete storage[key];
    }
  }),
  setItem: jest.fn(async (key, value) => {
    storage[key] = value;
  })
};
