import { describe, it, before } from "node:test";
import assert from "node:assert/strict";
import {
  debounce,
  throttle,
  deepClone,
  deepMerge,
  generateId,
  validateNumber,
  formatPercentage,
  handleError,
} from "../js/utils.js";

describe("deepClone", () => {
  it("clones primitives as-is", () => {
    assert.equal(deepClone(42), 42);
    assert.equal(deepClone("hello"), "hello");
    assert.equal(deepClone(null), null);
  });

  it("clones arrays without shared references", () => {
    const arr = [1, [2, 3]];
    const clone = deepClone(arr);
    assert.deepEqual(clone, arr);
    clone[1].push(4);
    assert.equal(arr[1].length, 2);
  });

  it("clones objects without shared references", () => {
    const obj = { a: { b: 1 } };
    const clone = deepClone(obj);
    clone.a.b = 99;
    assert.equal(obj.a.b, 1);
  });
});

describe("deepMerge", () => {
  it("merges flat objects", () => {
    const result = deepMerge({ a: 1 }, { b: 2 });
    assert.deepEqual(result, { a: 1, b: 2 });
  });

  it("deep-merges nested objects", () => {
    const result = deepMerge({ a: { x: 1 } }, { a: { y: 2 } });
    assert.deepEqual(result, { a: { x: 1, y: 2 } });
  });

  it("overwrites non-object values", () => {
    const result = deepMerge({ a: 1 }, { a: 2 });
    assert.equal(result.a, 2);
  });

  it("handles null/undefined sources gracefully", () => {
    const result = deepMerge({ a: 1 }, null, undefined);
    assert.deepEqual(result, { a: 1 });
  });
});

describe("generateId", () => {
  it("returns a non-empty string", () => {
    assert.equal(typeof generateId(), "string");
    assert.ok(generateId().length > 0);
  });

  it("prepends prefix when given", () => {
    assert.ok(generateId("test-").startsWith("test-"));
  });

  it("returns unique IDs", () => {
    const ids = new Set(Array.from({ length: 100 }, () => generateId()));
    assert.equal(ids.size, 100);
  });
});

describe("validateNumber", () => {
  it("returns parsed number when in range", () => {
    assert.equal(validateNumber("5", 0, 10, 0), 5);
  });

  it("clamps to min", () => {
    assert.equal(validateNumber("-1", 0, 10, 0), 0);
  });

  it("clamps to max", () => {
    assert.equal(validateNumber("20", 0, 10, 0), 10);
  });

  it("returns defaultValue for non-numeric input", () => {
    assert.equal(validateNumber("abc", 0, 10, 42), 42);
  });
});

describe("formatPercentage", () => {
  it("formats 0.42 as 42%", () => {
    assert.equal(formatPercentage(0.42), "42%");
  });

  it("respects decimal places", () => {
    assert.equal(formatPercentage(0.1234, 2), "12.34%");
  });

  it("handles 0 and 1", () => {
    assert.equal(formatPercentage(0), "0%");
    assert.equal(formatPercentage(1), "100%");
  });
});

describe("handleError", () => {
  it("returns a structured error object", () => {
    const result = handleError(new Error("oops"), "test");
    assert.equal(result.success, false);
    assert.equal(result.error, "oops");
    assert.equal(result.context, "test");
  });

  it("handles non-Error objects", () => {
    const result = handleError("string error", "ctx");
    assert.equal(result.error, "string error");
  });
});

describe("debounce", () => {
  it("delays execution", (t, done) => {
    let count = 0;
    const fn = debounce(() => count++, 50);
    fn();
    fn();
    fn();
    assert.equal(count, 0);
    setTimeout(() => {
      assert.equal(count, 1);
      done();
    }, 100);
  });
});

describe("throttle", () => {
  it("calls at most once in the limit window", (t, done) => {
    let count = 0;
    const fn = throttle(() => count++, 100);
    fn();
    fn();
    fn();
    assert.equal(count, 1);
    setTimeout(() => {
      fn();
      assert.equal(count, 2);
      done();
    }, 150);
  });
});
