# Getting Started

adlimen-tokens provides the Ad Limen design system as raw SCSS and ESM JS. No build step required — import directly from a submodule or copy.

## Installation

### Via Git submodule (Hugo projects)

```bash
git submodule add https://github.com/matteocervelli/adlimen-tokens.git themes/adlimen-tokens
```

### Via npm

```bash
npm install github:matteocervelli/adlimen-tokens
```

### Direct copy

Copy `scss/` and `js/` into your project. No compilation needed — the files are already valid SCSS and ESM JS.

## SCSS

Import in your SCSS entrypoint (order matters — colors first):

```scss
@import "adlimen-tokens/scss/adlimen-colors";
@import "adlimen-tokens/scss/variables";
```

Or with Hugo theme path:

```scss
@import "themes/adlimen-tokens/scss/adlimen-colors";
@import "themes/adlimen-tokens/scss/variables";
```

After import, all CSS custom properties are available on `:root`:

```css
color: var(--AL-teal);
background: var(--color-navy-600);
font-size: var(--font-size-lg);
padding: var(--space-md);
```

## JS (ESM)

```js
import { EventEmitter } from "./adlimen-tokens/js/events.js";
import { Storage } from "./adlimen-tokens/js/storage.js";
import {
  debounce,
  throttle,
  deepClone,
  deepMerge,
  generateId,
} from "./adlimen-tokens/js/utils.js";
```

All JS files use ESM (`export`/`import`). No bundler required in modern browsers.

### EventEmitter — basic usage

```js
const emitter = new EventEmitter();

const unsubscribe = emitter.on("data:loaded", (payload) => {
  console.log(payload);
});

emitter.emit("data:loaded", { items: [] });
unsubscribe(); // remove listener
```

### Storage — namespaced localStorage

```js
const store = new Storage("myapp");

store.set("theme", "dark");
const theme = store.get("theme"); // "dark"
const missing = store.get("x", "default"); // "default"

const unwatch = store.onChange(({ key, oldValue, newValue }) => {
  console.log(`${key}: ${oldValue} → ${newValue}`);
});

store.remove("theme");
unwatch(); // stop watching
```

Keys are automatically prefixed: `adlimen_myapp_theme`.

### Utils — common patterns

```js
// Debounce: delay execution until idle
const onResize = debounce(() => recalcLayout(), 200);
window.addEventListener("resize", onResize);

// Throttle: limit to once per interval
const onScroll = throttle(() => updateNavbar(), 100);
window.addEventListener("scroll", onScroll);

// Deep clone (no reference sharing)
const copy = deepClone(originalConfig);

// Deep merge (non-destructive to nested objects)
const config = deepMerge({ a: { b: 1 } }, { a: { c: 2 } });
// → { a: { b: 1, c: 2 } }

// Generate unique ID with optional prefix
const id = generateId("item-"); // "item-1710000000000-x7f2k"
```

## Exports (package.json)

```json
{
  "./js/events": "./js/events.js",
  "./js/storage": "./js/storage.js",
  "./js/utils": "./js/utils.js",
  "./scss/colors": "./scss/_adlimen-colors.scss",
  "./scss/variables": "./scss/_variables.scss"
}
```

## Next steps

- [API Reference](api-reference.md) — complete token listings and JS function signatures
