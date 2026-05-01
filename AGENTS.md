# Repository Guidelines

## Project Structure & Module Organization

This repository is a raw-source design token package for Ad Limen Hugo projects. There is no build output checked in.

- `scss/_adlimen-colors.scss` contains the full CSS custom-property color palette.
- `scss/_variables.scss` contains semantic brand aliases, typography, spacing, shadows, and component variables.
- `js/events.js`, `js/storage.js`, and `js/utils.js` expose native ESM helpers.
- `js/*.d.ts` contains TypeScript declarations for the JS modules.
- `docs/user-guide/` contains user-facing usage and API documentation.
- `.forgejo/workflows/` contains CI and private NPM publish workflows.

Keep package entry points aligned with the `exports` map in `package.json`.

## Build, Test, and Development Commands

There is intentionally no build step and no npm dependency install requirement.

Use these checks before handoff:

```bash
node --check js/events.js
node --check js/storage.js
node --check js/utils.js
node -e "const p=require('./package.json'); const fs=require('fs'); for (const v of Object.values(p.exports)) if (!fs.existsSync(v.replace('./',''))) process.exit(1)"
npm pack --dry-run
```

`node --check` validates ESM syntax. The export check mirrors CI by ensuring every declared export exists. `npm pack --dry-run` confirms the package will publish only intended files.

## Coding Style & Naming Conventions

Use English for code, comments, docs, and commit messages. JavaScript must stay dependency-free, browser-compatible, and ESM-only. Prefer named exports and small utility functions. Do not introduce CommonJS, bundlers, transpilers, PostCSS, Tailwind, or runtime package dependencies.

SCSS files use `//` comments and CSS custom properties. Keep raw color tokens in `_adlimen-colors.scss`; reference them from `_variables.scss` with `var(--color-*)` aliases.

## Testing Guidelines

No formal test framework is configured. For JS changes, run `node --check` on every changed module and manually inspect public behavior against `docs/user-guide/api-reference.md`. For SCSS changes, verify token names are stable and consumers can still import:

```scss
@import "adlimen-tokens/scss/adlimen-colors";
@import "adlimen-tokens/scss/variables";
```

Update `.d.ts` files and docs whenever exported JS APIs change.

## Commit & Pull Request Guidelines

Git history uses Conventional Commits, for example `fix(ci): ...`, `chore: ...`, and `fix(types): ...`. Keep commits scoped and descriptive.

Pull requests should include the purpose, changed public tokens or exports, validation commands run, and any consumer impact. Link related issues when available. For releases, update `package.json` version and tag with `v0.x.y`; publish runs only from semver tags.

## Security & Configuration Tips

Do not commit `.npmrc`, tokens, or registry credentials. Publish credentials belong in Forgejo secrets such as `NPM_TOKEN`; Telegram notification secrets stay optional and CI-only.
