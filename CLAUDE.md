# adlimen-tokens

Shared design tokens library for the Ad Limen ecosystem. Used by Hugo static sites.

## What's here

- `scss/_adlimen-colors.scss` — full color palette as CSS custom properties
- `scss/_variables.scss` — brand tokens, typography, spacing, shadows, component variables
- `js/events.js` — EventEmitter
- `js/storage.js` — namespaced localStorage wrapper
- `js/utils.js` — debounce, throttle, deepClone, deepMerge, generateId, etc.

## Project docs

- `ROADMAP.md` — planned versions and shipped items
- `TECH-STACK.md` — language stack, consumption patterns, constraints
- `CHANGELOG.md` — version history (Keep a Changelog format)

## Conventions

- No build step — raw SCSS and ESM JS, consumed directly by Hugo via submodule or copy.
- SCSS files use `//` comments (valid SCSS syntax, not plain CSS).
- All color tokens in `_adlimen-colors.scss`; semantic aliases in `_variables.scss`.
- No external dependencies.
- Language: English in all new code and comments.

## Key rules

- Do not add a build step unless multiple consumers explicitly need compiled output.
- Do not add npm dependencies.
- Color tokens live in `_adlimen-colors.scss` only. `_variables.scss` references them via `var(--color-*)`.
- Version bumps: update `package.json` version and tag (`v0.x.y`).
