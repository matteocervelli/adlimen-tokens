# CN7 lifecycle preparation

The canonical Tokens source and release route now live in `adlimen-ui/packages/tokens` under
`@adlimen/tokens`. The final external consumer of this standalone coordinate migrated on
2026-09-12. This repository remains available for history and rollback, but it must not create new
standalone tags, releases, or npm artifacts while the compatibility lifecycle is evaluated.

## Disabled routes

- A push to `main` runs an explanatory no-op instead of auto-tagging.
- The historical tag-driven release and npm publication routes are manual explanatory no-ops.
- No disabled route inherits registry, mirror, or notification secrets.
- Historical tags, releases, and registry artifacts remain immutable and available.
- The existing Forgejo `NPM_TOKEN` is deliberately left in place for rollback; these workflows do
  not receive it, and registry version-list readback remains part of stable-window closure.

The canonical replacement is `@adlimen/tokens@0.2.1`, released by the `tokens/v*` workspace route.
The same change advances the development-only `js-yaml` lockfile resolution from 4.3.1 to 4.3.2
for CVE-2026-84375; both package-manager audits are clean. It does not modify package source,
version, exports, consumers, runtime dependencies, packed contents, tags, releases, registry
artifacts, or local checkouts.

## Stable window

The CN7 stable window starts only after this publishing-stop change is merged on both forges and
the no-op main workflow is green. Consumer zero by itself is insufficient. The future closure must
recheck remote-clean consumers, both forge refs, the registry version list, and the absence of new
standalone releases before any lifecycle transition.

The generic `ci-setup audit` intentionally reports the three no-op release routes as non-canonical
and also reports the pre-existing `adlimen-cicd@v2.3.17` pins on the retained CI callers. Those
findings are recorded governance debt, not active release paths; exact branch and post-merge CI
must still be green before the window starts.

## Rollback

If the old owner must publish again, revert this commit through review and restore the three
workflow callers at their exact previous versions. Do not move existing tags, overwrite registry
artifacts, delete releases, or remove the canonical workspace route.
