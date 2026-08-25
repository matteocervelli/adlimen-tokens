# Changelog

All notable changes to adlimen-tokens are documented here.
Format: [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
Versioning: [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Security

- Both lockfiles now resolve the patched `js-yaml` (4.1.1 → 4.3.1) and `brace-expansion`
  (1.1.14 → 1.1.18). Both arrive through ESLint and are development-only, so the published
  package is unchanged: it still ships 11 files and declares no runtime dependencies.
  `pnpm audit` goes from 5 high + 1 moderate to clean, `npm audit` from 2 high to clean.
  No override was needed — the existing ranges already admitted the patched versions and
  only the pinned lockfile entries were holding them back.

## [0.1.0] - 2026-03-16

### Added

- Full color palette as CSS custom properties (`--color-*`) — 11 palettes, 13 shades each (`_adlimen-colors.scss`)
- Brand tokens, typography scale, spacing, shadows, and component variables (`_variables.scss`)
- `EventEmitter` class — subscribe/emit/unsubscribe pattern (`js/events.js`)
- `Storage` class — namespaced `localStorage` wrapper with change events (`js/storage.js`)
- Utility functions: `debounce`, `throttle`, `deepClone`, `deepMerge`, `generateId`, `validateNumber`, `formatPercentage`, `isFeatureSupported`, `handleError`, `loadScript`, `createMediaQueryListener` (`js/utils.js`)
- User guide docs: getting-started, API reference (`docs/user-guide/`)
- Package exports map for ESM and SCSS consumers (`package.json`)
