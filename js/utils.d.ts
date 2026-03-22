/**
 * Type declarations for utils (utils.js)
 * Ad Limen Consulting - 2026
 */

export declare function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  wait?: number,
): (...args: Parameters<T>) => void;

export declare function throttle<T extends (...args: unknown[]) => void>(
  func: T,
  limit?: number,
): (...args: Parameters<T>) => void;

export declare function deepClone<T>(obj: T): T;

export declare function deepMerge<T extends object>(
  target: T,
  ...sources: Partial<T>[]
): T;

export declare function generateId(prefix?: string): string;

export declare function validateNumber(
  value: unknown,
  min: number | undefined,
  max: number | undefined,
  defaultValue: number,
): number;

export declare function formatPercentage(
  value: number,
  decimals?: number,
): string;

export type SupportedFeature =
  | "localStorage"
  | "matchMedia"
  | "customProperties"
  | "intersectionObserver"
  | "mutationObserver";

export declare function isFeatureSupported(feature: SupportedFeature): boolean;

export interface HandleErrorResult {
  success: false;
  error: string;
  context: string;
}

export declare function handleError(
  error: unknown,
  context?: string,
): HandleErrorResult;

export interface LoadScriptOptions {
  async?: boolean;
  defer?: boolean;
}

export declare function loadScript(
  src: string,
  options?: LoadScriptOptions,
): Promise<HTMLScriptElement>;

export declare function createMediaQueryListener(
  query: string,
  callback: (matches: boolean) => void,
): () => void;
