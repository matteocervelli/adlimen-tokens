/**
 * Core Utils — common utility functions
 * Ad Limen Consulting - 2026
 */

// Debounce: delays invoking func until after wait ms have elapsed since the last call
export function debounce(func, wait = 300) {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle: ensures func is called at most once per limit ms
export function throttle(func, limit = 300) {
  let inThrottle;

  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Deep clone: returns a new object with no shared references
export function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, deepClone(value)]),
  );
}

// Deep merge: recursively merges sources into target (mutates target)
export function deepMerge(target, ...sources) {
  if (!sources.length) return target;

  const source = sources.shift();

  if (source === undefined || source === null)
    return deepMerge(target, ...sources);
  if (target === null || target === undefined)
    return deepMerge({}, source, ...sources);

  // Only merge plain objects; skip null, arrays, and other types
  if (
    typeof target === "object" &&
    typeof source === "object" &&
    target !== null &&
    source !== null &&
    !Array.isArray(target) &&
    !Array.isArray(source)
  ) {
    Object.keys(source).forEach((key) => {
      if (
        typeof source[key] === "object" &&
        source[key] !== null &&
        !Array.isArray(source[key])
      ) {
        if (
          !target[key] ||
          typeof target[key] !== "object" ||
          target[key] === null
        ) {
          target[key] = {};
        }
        deepMerge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    });
  }

  return deepMerge(target, ...sources);
}

// Generate a unique ID with an optional prefix
export function generateId(prefix = "") {
  return `${prefix}${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

// Validate a numeric value and clamp it to [min, max]; returns defaultValue if not a number
export function validateNumber(value, min, max, defaultValue) {
  const num = parseFloat(value);

  if (isNaN(num)) {
    return defaultValue;
  }

  if (min !== undefined && num < min) {
    return min;
  }

  if (max !== undefined && num > max) {
    return max;
  }

  return num;
}

// Format a 0–1 ratio as a percentage string (e.g. 0.42 → "42%")
export function formatPercentage(value, decimals = 0) {
  return `${(value * 100).toFixed(decimals)}%`;
}

// Check whether a named browser feature is available at runtime
export function isFeatureSupported(feature) {
  const features = {
    localStorage: () => {
      try {
        localStorage.setItem("test", "test");
        localStorage.removeItem("test");
        return true;
      } catch (e) {
        return false;
      }
    },
    matchMedia: () => typeof window.matchMedia === "function",
    customProperties: () => CSS.supports("(--custom-property: 0)"),
    intersectionObserver: () => "IntersectionObserver" in window,
    mutationObserver: () => "MutationObserver" in window,
  };

  return features[feature] ? features[feature]() : false;
}

// Consistent error handler — logs to console and returns a structured error object
export function handleError(error, context = "") {
  const errorMessage = error instanceof Error ? error.message : String(error);
  console.error(`[${context}] ${errorMessage}`);

  // Remote logging or other side effects can be added here
  return {
    success: false,
    error: errorMessage,
    context,
  };
}

// Dynamically load an external script and return a promise
export function loadScript(src, { async = true, defer = false } = {}) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = async;
    script.defer = defer;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));

    document.head.appendChild(script);
  });
}

// Reactive media-query listener — fires callback on match change and returns a cleanup fn
export function createMediaQueryListener(query, callback) {
  const mediaQuery = window.matchMedia(query);

  function handleChange(e) {
    callback(e.matches);
  }

  // Handle state change
  mediaQuery.addEventListener("change", handleChange);

  // Run initial callback
  handleChange(mediaQuery);

  // Return cleanup function
  return () => mediaQuery.removeEventListener("change", handleChange);
}
