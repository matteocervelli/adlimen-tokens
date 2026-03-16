/**
 * Core Utils - Funzioni di utilità comuni
 * Ad Limen Consulting - 2024
 */

// Funzione per debounce
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

// Funzione per throttle
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

// Funzione per deep clone di oggetti
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

// Funzione per merge profondo di oggetti
export function deepMerge(target, ...sources) {
  if (!sources.length) return target;

  const source = sources.shift();

  if (source === undefined || source === null)
    return deepMerge(target, ...sources);
  if (target === null || target === undefined)
    return deepMerge({}, source, ...sources);

  // Verifica che siano entrambi oggetti (ma non null, array o altri tipi)
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

// Funzione per generare un ID univoco
export function generateId(prefix = "") {
  return `${prefix}${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

// Funzione per validare un valore numerico
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

// Funzione per formattare una percentuale
export function formatPercentage(value, decimals = 0) {
  return `${(value * 100).toFixed(decimals)}%`;
}

// Funzione per verificare il supporto a una feature del browser
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

// Funzione per gestire errori in modo consistente
export function handleError(error, context = "") {
  const errorMessage = error instanceof Error ? error.message : String(error);
  console.error(`[${context}] ${errorMessage}`);

  // Qui potremmo aggiungere in futuro logging remoto o altre azioni
  return {
    success: false,
    error: errorMessage,
    context,
  };
}

// Funzione per caricare script in modo asincrono
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

// Funzione per gestire le media query in modo reattivo
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
