import { asyncStorageImpl } from './implementations/asyncStorage';
import { Storage } from './storageTypes';

export const storage: Storage = asyncStorageImpl;
