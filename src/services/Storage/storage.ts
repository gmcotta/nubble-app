import { Storage } from './storageTypes';

export let storage: Storage;

export function initializeStorage(storageImpl: Storage) {
  storage = storageImpl;
}
