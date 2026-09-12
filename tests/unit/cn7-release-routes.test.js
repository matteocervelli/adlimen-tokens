import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import test from "node:test";

const readWorkflow = (name) =>
  readFileSync(`.forgejo/workflows/${name}`, "utf8");

test("standalone release and publish routes are manual no-ops", () => {
  for (const name of ["publish.yml", "release.yml"]) {
    const workflow = readWorkflow(name);
    assert.match(workflow, /workflow_dispatch:/);
    assert.doesNotMatch(workflow, /\btags\s*:/);
    assert.doesNotMatch(workflow, /\buses:/);
    assert.doesNotMatch(workflow, /secrets:\s*inherit/);
    assert.match(workflow, /legacy (?:publishing|releases) (?:is|are) disabled/);
  }
});

test("main pushes can only report that legacy tagging is disabled", () => {
  const workflow = readWorkflow("release-tag.yml");
  assert.match(workflow, /branches:\s*\[main\]/);
  assert.match(workflow, /workflow_dispatch:/);
  assert.doesNotMatch(workflow, /\btags\s*:/);
  assert.doesNotMatch(workflow, /\buses:/);
  assert.doesNotMatch(workflow, /secrets:\s*inherit/);
  assert.match(workflow, /legacy tagging is disabled/);
});

test("no other Forgejo workflow restores a standalone publishing route", () => {
  const allowedCiWorkflows = new Set(["ci-security.yml", "ci-test.yml", "ci.yml"]);
  const disabledRoutes = new Set(["publish.yml", "release-tag.yml", "release.yml"]);

  for (const name of readdirSync(".forgejo/workflows").filter((entry) => /\.ya?ml$/.test(entry))) {
    const workflow = readWorkflow(name);
    if (disabledRoutes.has(name)) {
      continue;
    }
    assert.ok(allowedCiWorkflows.has(name), `unclassified workflow: ${name}`);
    assert.doesNotMatch(workflow, /\btags\s*:/, `${name} has a tag trigger`);
    assert.doesNotMatch(
      workflow,
      /\/(?:npm-publish|release-tag|release)\.yml@|\bnpm\s+publish\b|\bgit\s+tag\b|\brelease\s+create\b/,
      `${name} invokes a release route`,
    );
  }
});

test("GitHub mirror has no release or publishing workflow", () => {
  const githubWorkflows = ".github/workflows";
  if (!existsSync(githubWorkflows)) {
    return;
  }

  for (const name of readdirSync(githubWorkflows)) {
    const workflow = readFileSync(`${githubWorkflows}/${name}`, "utf8");
    assert.doesNotMatch(workflow, /\btags\s*:/, `${name} has a tag trigger`);
    assert.doesNotMatch(
      workflow,
      /\/(?:npm-publish|release-tag|release)\.yml@|\bnpm\s+publish\b|\bgit\s+tag\b|\brelease\s+create\b/,
      `${name} contains a publishing route`,
    );
  }
});
