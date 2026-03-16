# API Reference

Complete reference for all SCSS tokens and JS modules in adlimen-tokens v0.1.0.

---

## SCSS — `_adlimen-colors.scss`

All colors are CSS custom properties on `:root`. Each palette has 13 shades: `50, 100, 150, 200, 300, 400, 500, 600, 700, 800, 850, 900, 950`.

### Foundation

| Palette           | Range             | Notes                         |
| ----------------- | ----------------- | ----------------------------- |
| `--color-gray-*`  | #F9F9F9 → #1B2631 | Neutral UI base               |
| `--color-sand-*`  | #FBF6EF → #451C00 | Warm neutral                  |
| `--color-navy-*`  | #EEF2F6 → #15202B | Primary dark                  |
| `--color-black-*` | #F2F2F2 → #0F0F0F | True black scale (no 150/850) |

### Emergence

| Palette            | Range             | Notes         |
| ------------------ | ----------------- | ------------- |
| `--color-orange-*` | #FFF1E8 → #551D00 | Accent warm   |
| `--color-yellow-*` | #FFFAE6 → #352800 | Accent bright |

### Growth

| Palette           | Range             | Notes           |
| ----------------- | ----------------- | --------------- |
| `--color-green-*` | #F1F5E9 → #253300 | Success, growth |
| `--color-blue-*`  | #E8F1FA → #001F3B | Info, trust     |

### Scaling

| Palette            | Range             | Notes             |
| ------------------ | ----------------- | ----------------- |
| `--color-teal-*`   | #E0F2F2 → #003333 | Brand primary     |
| `--color-purple-*` | #F0ECF9 → #200644 | Premium, advanced |

### Mastery

| Palette             | Range             | Notes               |
| ------------------- | ----------------- | ------------------- |
| `--color-magenta-*` | #FCE9F3 → #460234 | Highlight, creative |

### Signals

| Palette         | Range             | Notes         |
| --------------- | ----------------- | ------------- |
| `--color-red-*` | #FDECEB → #450000 | Error, danger |

---

## SCSS — `_variables.scss`

### Brand Colors (`--AL-*`)

| Token             | Value                        | Use                 |
| ----------------- | ---------------------------- | ------------------- |
| `--AL-teal`       | `--color-teal-600` (#008080) | Primary brand       |
| `--AL-navy`       | `--color-navy-600` (#34495E) | Secondary brand     |
| `--AL-gray`       | `--color-gray-100` (#F5F5F5) | Background light    |
| `--AL-steel`      | `--color-gray-400` (#B3B6B7) | Borders, muted      |
| `--AL-black`      | `--color-gray-950` (#1B2631) | Text dark           |
| `--AL-pure-white` | #FFF                         | Background white    |
| `--pure-white`    | `--AL-pure-white`            | Compatibility alias |
| `--AL-sand`       | `--color-sand-100`           | Surface warm        |
| `--AL-wet-sand`   | `--color-sand-500`           | Surface warm dark   |
| `--AL-red`        | `--color-red-400`            | Error               |
| `--AL-magenta`    | `--color-magenta-400`        | Accent creative     |
| `--AL-orange`     | `--color-orange-400`         | Accent warm         |
| `--AL-purple`     | `--color-purple-600`         | Accent premium      |
| `--AL-green`      | `--color-green-400`          | Success             |
| `--AL-yellow`     | `--color-yellow-400`         | Warning             |
| `--AL-blue`       | `--color-blue-400`           | Info                |

### Semantic Accent Colors

| Token                 | Value             |
| --------------------- | ----------------- |
| `--accent-primary`    | `--AL-teal`       |
| `--accent-secondary`  | `--AL-navy`       |
| `--accent-tertiary`   | `--AL-steel`      |
| `--accent-quaternary` | `--AL-sand`       |
| `--accent-quinary`    | `--AL-wet-sand`   |
| `--accent-senary`     | `--AL-gray`       |
| `--accent-septenary`  | `--AL-pure-white` |
| `--accent-octonary`   | `--AL-black`      |

### Typography

#### Font Families

| Token              | Value                                   |
| ------------------ | --------------------------------------- |
| `--font-primary`   | Raleway, sans-serif                     |
| `--font-secondary` | Lora, serif                             |
| `--font-headings`  | Lora, serif                             |
| `--font-dyslexic`  | OpenDyslexic, Raleway                   |
| `--font-content`   | System UI stack (Inter, IBM Plex Sans…) |
| `--font-mono`      | System monospace stack                  |

#### Font Size Scale

Base: `--font-size-base: calc(1.5rem + 0.2vw)` × `--text-scale` (default 1).

| Token                | Multiplier |
| -------------------- | ---------- |
| `--font-size-3xs`    | 0.6×       |
| `--font-size-2xs`    | 0.7×       |
| `--font-size-xs`     | 0.8×       |
| `--font-size-sm`     | 0.9×       |
| `--font-size-normal` | 1×         |
| `--font-size-md`     | 1.1×       |
| `--font-size-lg`     | 1.2×       |
| `--font-size-xl`     | 1.4×       |
| `--font-size-2xl`    | 1.6×       |
| `--font-size-3xl`    | 1.8×       |
| `--font-size-4xl`    | 2×         |
| `--font-size-5xl`    | 2.4×       |
| `--font-size-6xl`    | 2.8×       |
| `--font-size-7xl`    | 3.2×       |
| `--font-size-8xl`    | 3.6×       |
| `--font-size-9xl`    | 4×         |
| `--font-size-10xl`   | 4.4×       |

#### Font Weights

| Token                      | Value                    |
| -------------------------- | ------------------------ |
| `--font-weight-thin`       | 100                      |
| `--font-weight-extralight` | 200                      |
| `--font-weight-light`      | 300                      |
| `--font-weight-normal`     | 400                      |
| `--font-weight-medium`     | 500                      |
| `--font-weight-semibold`   | 600                      |
| `--font-weight-bold`       | 700                      |
| `--font-weight-extrabold`  | 800                      |
| `--font-weight-black`      | 900                      |
| `--font-weight-heading`    | `--font-weight-bold`     |
| `--font-weight-body`       | `--font-weight-normal`   |
| `--font-weight-strong`     | `--font-weight-semibold` |
| `--font-weight-emphasis`   | `--font-weight-medium`   |

#### Line Heights

| Token                 | Value |
| --------------------- | ----- |
| `--line-height`       | 1.5   |
| `--line-height-tight` | 1.3   |
| `--line-height-loose` | 1.7   |

### Spacing Scale

Base: `--space-base: calc(1rem + 0.25vw)` × `--text-scale`.

| Token            | Multiplier |
| ---------------- | ---------- |
| `--space-3s`     | 0.125×     |
| `--space-2xs`    | 0.25×      |
| `--space-xs`     | 0.5×       |
| `--space-sm`     | 0.75×      |
| `--space-normal` | 1×         |
| `--space-md`     | 1.25×      |
| `--space-lg`     | 1.5×       |
| `--space-xl`     | 2×         |
| `--space-2xl`    | 3×         |
| `--space-3xl`    | 4×         |
| `--space-4xl`    | 5×         |
| `--space-5xl`    | 6×         |
| `--space-6xl`    | 7×         |
| `--space-7xl`    | 8×         |
| `--space-8xl`    | 9×         |
| `--space-9xl`    | 10×        |
| `--space-10xl`   | 11×        |

### Layout

| Token                  | Value  | Use                    |
| ---------------------- | ------ | ---------------------- |
| `--wrap-wide`          | 120em  | Full-width sections    |
| `--wrap-normal`        | 60em   | Body text              |
| `--wrap-documentation` | 80em   | Docs/article pages     |
| `--wrap-max`           | 1200px | Banner/modal max width |
| `--input-width`        | 20em   | Default input width    |

### Border Radius

| Token         | Value |
| ------------- | ----- |
| `--radius-sm` | 4px   |
| `--radius-md` | 8px   |
| `--radius-lg` | 16px  |

### Transitions

| Token                 | Value      |
| --------------------- | ---------- |
| `--transition-fast`   | 150ms ease |
| `--transition-normal` | 300ms ease |

### Box Shadows

| Token                | Value                       |
| -------------------- | --------------------------- |
| `--box-shadow-light` | 0 2px 8px rgb(0 0 0 / 5%)   |
| `--box-shadow-sm`    | 0 2px 4px rgb(0 0 0 / 10%)  |
| `--box-shadow-md`    | 0 4px 6px rgb(0 0 0 / 10%)  |
| `--box-shadow-lg`    | 0 5px 15px rgb(0 0 0 / 10%) |
| `--box-shadow-xl`    | 0 8px 24px rgb(0 0 0 / 15%) |

### Component Tokens

#### Buttons

| Token                                 | Value                      |
| ------------------------------------- | -------------------------- |
| `--button-primary-background`         | `--accent-primary`         |
| `--button-primary-text`               | `--text-on-accent-primary` |
| `--button-primary-border`             | `--accent-primary`         |
| `--button-primary-hover-background`   | `--text-on-accent-primary` |
| `--button-primary-hover-text`         | `--accent-primary`         |
| `--button-secondary-background`       | `--background-primary`     |
| `--button-secondary-text`             | `--text-primary`           |
| `--button-secondary-border`           | `--accent-tertiary`        |
| `--button-secondary-hover-background` | `--accent-tertiary`        |

#### Cards

| Token               | Value             |
| ------------------- | ----------------- |
| `--background-card` | `--AL-pure-white` |
| `--border-card`     | `--AL-steel`      |

#### Forms

| Token                | Value             |
| -------------------- | ----------------- |
| `--background-input` | `--AL-pure-white` |
| `--border-input`     | `--AL-steel`      |
| `--text-placeholder` | `--AL-steel`      |
| `--input-focus`      | `--AL-teal`       |

#### Icons

| Token                  | Value       |
| ---------------------- | ----------- |
| `--icon-size`          | 24px        |
| `--icon-button-size`   | 40px        |
| `--icon-button-radius` | 8px         |
| `--icon-primary`       | `--AL-navy` |

#### Headings

| Token                 | Value       |
| --------------------- | ----------- |
| `--heading-primary`   | `--AL-navy` |
| `--heading-secondary` | `--AL-teal` |

#### Alternating Sections

| Token                   | Section 1  | Section 2 | Section 3 |
| ----------------------- | ---------- | --------- | --------- |
| `--background-section*` | light gray | sand      | white     |
| `--text-section*`       | default    | navy      | navy      |
| `--heading-section*`    | default    | navy      | navy      |

---

## JS — `js/events.js`

```js
import { EventEmitter } from "./js/events.js";
```

### `new EventEmitter()`

#### Methods

| Method          | Signature                                           | Returns      | Description                                                  |
| --------------- | --------------------------------------------------- | ------------ | ------------------------------------------------------------ |
| `on`            | `(eventName: string, handler: (data: any) => void)` | `() => void` | Subscribe. Returns unsubscribe function.                     |
| `off`           | `(eventName: string, handler: Function)`            | `void`       | Remove specific handler.                                     |
| `emit`          | `(eventName: string, data?: any)`                   | `void`       | Fire all handlers. Errors in handlers are caught and logged. |
| `listenerCount` | `(eventName: string)`                               | `number`     | Count of active handlers for event.                          |
| `clearEvent`    | `(eventName: string)`                               | `void`       | Remove all handlers for one event.                           |
| `clearAll`      | `()`                                                | `void`       | Remove all handlers for all events.                          |

---

## JS — `js/storage.js`

```js
import { Storage } from "./js/storage.js";
```

Wraps `localStorage` with JSON serialization, namespacing, and change events.

### `new Storage(namespace?: string)`

Keys are stored as `adlimen_{namespace}_{key}`. With empty namespace: `adlimen_{key}`.

#### Methods

| Method     | Signature                                        | Returns      | Description                                                                             |
| ---------- | ------------------------------------------------ | ------------ | --------------------------------------------------------------------------------------- |
| `set`      | `(key: string, value: any)`                      | `boolean`    | Serialize + store. Emits `storage:change` if value changed. Returns `false` on error.   |
| `get`      | `(key: string, defaultValue?: any)`              | `any`        | Deserialize + return. Returns `defaultValue` (default: `null`) if key missing or error. |
| `remove`   | `(key: string)`                                  | `boolean`    | Delete key. Emits `storage:change` with `newValue: null`.                               |
| `has`      | `(key: string)`                                  | `boolean`    | Check if key exists (without deserializing).                                            |
| `keys`     | `()`                                             | `string[]`   | All keys in this namespace (stripped of prefix).                                        |
| `clear`    | `()`                                             | `void`       | Remove all keys in this namespace.                                                      |
| `onChange` | `(handler: ({key, oldValue, newValue}) => void)` | `() => void` | Subscribe to any change. Returns unsubscribe function.                                  |

---

## JS — `js/utils.js`

```js
import {
  debounce,
  throttle,
  deepClone,
  deepMerge,
  generateId,
  validateNumber,
  formatPercentage,
  isFeatureSupported,
  handleError,
  loadScript,
  createMediaQueryListener,
} from "./js/utils.js";
```

### Functions

#### `debounce(func, wait?)`

Returns a debounced version of `func`. Delays execution until `wait` ms after the last call.

- `wait` default: 300ms

#### `throttle(func, limit?)`

Returns a throttled version of `func`. Fires at most once per `limit` ms.

- `limit` default: 300ms

#### `deepClone(obj)`

Deep-copies plain objects and arrays. Returns primitives and `null` unchanged.

#### `deepMerge(target, ...sources)`

Recursively merges source objects into target. Arrays are replaced (not merged). Returns `target`. Handles `null`/`undefined` gracefully.

#### `generateId(prefix?)`

Returns `"{prefix}{Date.now()}-{random9chars}"`. Unique within a session.

- `prefix` default: `""`

#### `validateNumber(value, min?, max?, defaultValue)`

Parses `value` as float. Returns `defaultValue` if NaN, clamps to `[min, max]` otherwise.

#### `formatPercentage(value, decimals?)`

Returns `"{value * 100}%"` formatted to `decimals` places.

- `decimals` default: 0
- Example: `formatPercentage(0.75)` → `"75%"`

#### `isFeatureSupported(feature)`

Checks browser feature availability. Supported values:

- `"localStorage"` — tests read/write/delete
- `"matchMedia"` — `typeof window.matchMedia === "function"`
- `"customProperties"` — `CSS.supports("(--custom-property: 0)")`
- `"intersectionObserver"` — `"IntersectionObserver" in window`
- `"mutationObserver"` — `"MutationObserver" in window`

#### `handleError(error, context?)`

Logs to `console.error` and returns `{ success: false, error: string, context: string }`.

#### `loadScript(src, { async?, defer? }?)`

Dynamically appends `<script>` to `document.head`. Returns a Promise that resolves with the script element on load, rejects on error.

- `async` default: `true`
- `defer` default: `false`

#### `createMediaQueryListener(query, callback)`

Wraps `window.matchMedia`. Calls `callback(matches: boolean)` immediately and on every change.
Returns a cleanup function that removes the listener.

```js
const cleanup = createMediaQueryListener(
  "(prefers-color-scheme: dark)",
  (isDark) => {
    document.body.dataset.theme = isDark ? "dark" : "light";
  },
);
// later:
cleanup();
```
