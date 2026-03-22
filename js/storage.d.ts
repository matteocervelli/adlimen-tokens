/**
 * Type declarations for Storage (storage.js)
 * Ad Limen Consulting - 2026
 */

import type { Unsubscribe } from "./events";

export interface StorageChangeEvent<T = unknown> {
  key: string;
  oldValue: T | null;
  newValue: T | null;
}

export declare class Storage {
  constructor(namespace?: string);
  set<T = unknown>(key: string, value: T): boolean;
  get<T = unknown>(key: string, defaultValue?: T | null): T | null;
  remove(key: string): boolean;
  has(key: string): boolean;
  keys(): string[];
  clear(): void;
  onChange<T = unknown>(
    handler: (event: StorageChangeEvent<T>) => void,
  ): Unsubscribe;
}
