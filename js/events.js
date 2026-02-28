/**
 * Core Events System - Sistema centralizzato di gestione eventi
 * Ad Limen Consulting - 2024
 */

class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  on(eventName, handler) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, new Set());
    }
    this.events.get(eventName).add(handler);
    return () => this.off(eventName, handler);
  }

  off(eventName, handler) {
    if (!this.events.has(eventName)) return;
    this.events.get(eventName).delete(handler);
    
    if (this.events.get(eventName).size === 0) {
      this.events.delete(eventName);
    }
  }

  emit(eventName, data) {
    if (!this.events.has(eventName)) return;
    
    this.events.get(eventName).forEach(handler => {
      try {
        handler(data);
      } catch (error) {
        console.error(`[Events] Errore nell'handler per l'evento ${eventName}:`, error);
      }
    });
  }

  listenerCount(eventName) {
    return this.events.has(eventName) ? this.events.get(eventName).size : 0;
  }

  clearEvent(eventName) {
    if (this.events.has(eventName)) {
      this.events.delete(eventName);
    }
  }

  clearAll() {
    this.events.clear();
  }
}

export { EventEmitter }; 