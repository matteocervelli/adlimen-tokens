/**
 * Core Storage System - Sistema unificato per la gestione dello storage
 * Ad Limen Consulting - 2024
 */

import { EventEmitter } from './events.js';

class Storage {
  constructor(namespace = '') {
    this.events = new EventEmitter();
    this.KEY_PREFIX = `adlimen_${namespace ? namespace + '_' : ''}`;
    this.STORAGE_CHANGE_EVENT = 'storage:change';
  }

  getFullKey(key) {
    return `${this.KEY_PREFIX}${key}`;
  }

  set(key, value) {
    try {
      const fullKey = this.getFullKey(key);
      const oldValue = this.get(key);
      
      localStorage.setItem(fullKey, JSON.stringify(value));
      
      if (oldValue !== value) {
        this.events.emit(this.STORAGE_CHANGE_EVENT, {
          key,
          oldValue,
          newValue: value
        });
      }
      
      return true;
    } catch (error) {
      console.error(`[Storage] Errore nel salvataggio della chiave ${key}:`, error);
      return false;
    }
  }

  get(key, defaultValue = null) {
    try {
      const fullKey = this.getFullKey(key);
      const value = localStorage.getItem(fullKey);
      
      return value !== null ? JSON.parse(value) : defaultValue;
    } catch (error) {
      console.error(`[Storage] Errore nella lettura della chiave ${key}:`, error);
      return defaultValue;
    }
  }

  remove(key) {
    try {
      const fullKey = this.getFullKey(key);
      const oldValue = this.get(key);
      
      localStorage.removeItem(fullKey);
      
      this.events.emit(this.STORAGE_CHANGE_EVENT, {
        key,
        oldValue,
        newValue: null
      });
      
      return true;
    } catch (error) {
      console.error(`[Storage] Errore nella rimozione della chiave ${key}:`, error);
      return false;
    }
  }

  has(key) {
    const fullKey = this.getFullKey(key);
    return localStorage.getItem(fullKey) !== null;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith(this.KEY_PREFIX)) {
        keys.push(key.slice(this.KEY_PREFIX.length));
      }
    }
    return keys;
  }

  clear() {
    const keysToRemove = this.keys();
    keysToRemove.forEach(key => this.remove(key));
  }

  onChange(handler) {
    return this.events.on(this.STORAGE_CHANGE_EVENT, handler);
  }
}

export { Storage }; 