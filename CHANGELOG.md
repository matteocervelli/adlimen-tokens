# Changelog

All notable changes to adlimen-tokens are documented here.
Format: [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
Versioning: [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

- Full color palette as CSS custom properties (`--color-*`) — 11 palettes, 13 shades each (`_adlimen-colors.scss`)
- Brand tokens, typography scale, spacing, shadows, and component variables (`_variables.scss`)
- `EventEmitter` class — subscribe/emit/unsubscribe pattern (`js/events.js`)
- `Storage` class — namespaced `localStorage` wrapper with change events (`js/storage.js`)
- Utility functions: `debounce`, `throttle`, `deepClone`, `deepMerge`, `generateId`, `validateNumber`, `formatPercentage`, `isFeatureSupported`, `handleError`, `loadScript`, `createMediaQueryListener` (`js/utils.js`)
- User guide docs: getting-started, API reference (`docs/user-guide/`)
- Package exports map for ESM and SCSS consumers (`package.json`)
