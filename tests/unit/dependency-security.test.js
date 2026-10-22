import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const isAtLeast = (version, minimum) => {
  const currentParts = version.split(".").map(Number);
  const minimumParts = minimum.split(".").map(Number);
  const length = Math.max(currentParts.length, minimumParts.length);
  for (let index = 0; index < length; index += 1) {
    const current = currentParts[index] ?? 0;
    const required = minimumParts[index] ?? 0;
    if (current !== required) {
      return current > required;
    }
  }
  return true;
};

test("both lockfiles resolve js-yaml outside CVE-2026-84375", () => {
  const npmLock = JSON.parse(readFileSync("package-lock.json", "utf8"));
  const npmVersions = Object.entries(npmLock.packages)
    .filter(([path]) => path === "node_modules/js-yaml" || path.endsWith("/node_modules/js-yaml"))
    .map(([, metadata]) => metadata.version);
  assert.ok(npmVersions.length > 0, "npm lock does not resolve js-yaml");
  for (const version of npmVersions) {
    assert.ok(isAtLeast(version, "4.3.2"), `npm lock resolves vulnerable js-yaml ${version}`);
  }

  const pnpmLock = readFileSync("pnpm-lock.yaml", "utf8");
  const pnpmVersions = [...pnpmLock.matchAll(/^  js-yaml@(\d+\.\d+\.\d+)(?:\([^)]*\))?:/gm)].map(
    (match) => match[1],
  );
  assert.ok(pnpmVersions.length > 0, "pnpm lock does not resolve js-yaml");
  for (const version of pnpmVersions) {
    assert.ok(
      isAtLeast(version, "4.3.2"),
      `pnpm lock resolves vulnerable js-yaml ${version}`,
    );
  }
});

test("both lockfiles retain the brace-expansion security floor", () => {
  const isPatchedBraceExpansion = (version) => {
    const major = Number(version.split(".")[0]);
    if (major === 1) {
      return isAtLeast(version, "1.1.18");
    }
    if (major === 2) {
      return isAtLeast(version, "2.0.2");
    }
    return major > 2;
  };
  const npmLock = JSON.parse(readFileSync("package-lock.json", "utf8"));
  const npmVersions = Object.entries(npmLock.packages)
    .filter(
      ([path]) =>
        path === "node_modules/brace-expansion" || path.endsWith("/node_modules/brace-expansion"),
    )
    .map(([, metadata]) => metadata.version);
  assert.ok(npmVersions.length > 0, "npm lock does not resolve brace-expansion");
  for (const version of npmVersions) {
    assert.ok(
      isPatchedBraceExpansion(version),
      `npm lock resolves vulnerable brace-expansion ${version}`,
    );
  }

  const pnpmLock = readFileSync("pnpm-lock.yaml", "utf8");
  const pnpmVersions = [
    ...pnpmLock.matchAll(/^  brace-expansion@(\d+\.\d+\.\d+)(?:\([^)]*\))?:/gm),
  ].map((match) => match[1]);
  assert.ok(pnpmVersions.length > 0, "pnpm lock does not resolve brace-expansion");
  for (const version of pnpmVersions) {
    assert.ok(
      isPatchedBraceExpansion(version),
      `pnpm lock resolves vulnerable brace-expansion ${version}`,
    );
  }
});
