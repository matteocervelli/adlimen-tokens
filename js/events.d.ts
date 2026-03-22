/**
 * Type declarations for EventEmitter (events.js)
 * Ad Limen Consulting - 2026
 */

export type EventHandler<T = unknown> = (data: T) => void;
export type Unsubscribe = () => void;

export declare class EventEmitter {
  on<T = unknown>(eventName: string, handler: EventHandler<T>): Unsubscribe;
  off<T = unknown>(eventName: string, handler: EventHandler<T>): void;
  emit<T = unknown>(eventName: string, data?: T): void;
  listenerCount(eventName: string): number;
  clearEvent(eventName: string): void;
  clearAll(): void;
}
