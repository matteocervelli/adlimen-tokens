# adlimen-tokens

Shared design tokens library for the Ad Limen ecosystem. Used by Hugo static sites.

## What's here

- `scss/_adlimen-colors.scss` — full color palette as CSS custom properties
- `scss/_variables.scss` — brand tokens, typography, spacing, shadows, component variables
- `js/events.js` — EventEmitter
- `js/storage.js` — namespaced localStorage wrapper
- `js/utils.js` — debounce, throttle, deepClone, deepMerge, generateId, etc.

## Design Decisions

- **No build step** — raw SCSS and ESM JS, consumed directly by Hugo via submodule or copy. Do not add a build step unless multiple consumers explicitly need compiled output.
- **Color tokens in separate file**: all colors in `_adlimen-colors.scss` only; `_variables.scss` references them via `var(--color-*)`.
- **No npm dependencies** — do not add any.

## Conventions

- Version bumps: update `package.json` version and tag (`v0.x.y`)
- SCSS files use `//` comments (valid SCSS, not plain CSS)
- Language: English in all new code and comments
