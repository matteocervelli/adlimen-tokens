# Tech Stack — adlimen-tokens

## Language & Format

| Layer        | Technology                   | Notes                                    |
| ------------ | ---------------------------- | ---------------------------------------- |
| CSS tokens   | SCSS (`.scss`)               | `//` comments, no build step, raw import |
| JS utilities | ESM (`type: "module"`)       | Native ES modules, no transpilation      |
| Package      | `package.json` (no lockfile) | No npm dependencies                      |

## Consumption

| Consumer        | Method                                     |
| --------------- | ------------------------------------------ |
| Hugo sites      | Git submodule or file copy; SCSS `@import` |
| Any ESM project | `import` from `package.json` exports map   |

## Constraints

- **No build step** — consumed as raw source by Hugo
- **No external dependencies** — zero npm packages
- **SCSS only** — no PostCSS, no Tailwind, no CSS-in-JS
- **ESM only** — no CommonJS, no bundler required

## File Structure

```
scss/
  _adlimen-colors.scss   # CSS custom properties for all color palettes
  _variables.scss        # Semantic aliases, typography, spacing, shadows
js/
  events.js              # EventEmitter (pub/sub)
  storage.js             # Namespaced localStorage wrapper
  utils.js               # General-purpose utility functions
```
