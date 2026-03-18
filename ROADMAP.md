# Roadmap — adlimen-tokens

Design token library for the Ad Limen ecosystem.

## v0.1.0 — Foundation _(in progress)_

- Full color palette as CSS custom properties (`--color-*`) — 11 palettes, 13 shades each
- Brand tokens, typography scale, spacing, shadows, and component variables (`_variables.scss`)
- `EventEmitter` class — subscribe/emit/unsubscribe pattern (`js/events.js`)
- `Storage` class — namespaced `localStorage` wrapper with change events (`js/storage.js`)
- Utility functions: `debounce`, `throttle`, `deepClone`, `deepMerge`, `generateId`, `validateNumber`, `formatPercentage`, `isFeatureSupported`, `handleError`, `loadScript`, `createMediaQueryListener`
- Package exports map for ESM and SCSS consumers

## Planned

- Add test suite (Vitest) for JS utilities #1
- Publish `v0.1.0` tag and GitHub release #2
