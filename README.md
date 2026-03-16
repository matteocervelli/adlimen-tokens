# adlimen-tokens

Shared Ad Limen design tokens — SCSS color palette, CSS custom properties, and core JS utilities for Hugo projects.

## Contents

| Path                        | Description                                                                             |
| --------------------------- | --------------------------------------------------------------------------------------- |
| `scss/_adlimen-colors.scss` | Full color palette as CSS custom properties (`--color-*`)                               |
| `scss/_variables.scss`      | Brand tokens, typography scale, spacing, shadows, and component variables               |
| `js/events.js`              | Lightweight `EventEmitter` class                                                        |
| `js/storage.js`             | Namespaced `localStorage` wrapper with change events                                    |
| `js/utils.js`               | Utility functions: `debounce`, `throttle`, `deepClone`, `deepMerge`, `generateId`, etc. |

## Usage in Hugo

### SCSS

Copy or submodule this repo, then import in your SCSS entrypoint:

```scss
@import "adlimen-tokens/scss/adlimen-colors";
@import "adlimen-tokens/scss/variables";
```

### JS (ESM)

```js
import { EventEmitter } from "./adlimen-tokens/js/events.js";
import { Storage } from "./adlimen-tokens/js/storage.js";
import { debounce, deepMerge } from "./adlimen-tokens/js/utils.js";
```

## Color System

Colors are organized by role:

- **Foundation:** `gray`, `sand`, `navy`, `black`
- **Emergence:** `orange`, `yellow`
- **Growth:** `green`, `blue`
- **Scaling:** `teal`, `purple`
- **Mastery:** `magenta`
- **Signals:** `red`

Each palette has 13 shades: `50, 100, 150, 200, 300, 400, 500, 600, 700, 800, 850, 900, 950`.

Brand aliases are defined in `_variables.scss` (e.g. `--AL-teal`, `--AL-navy`).

## License

BSL-1.1 — Copyright (c) 2026 Matteo Cervelli
