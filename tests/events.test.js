import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { EventEmitter } from "../js/events.js";

describe("EventEmitter.on / emit", () => {
  it("fires handler when event emitted", () => {
    const ee = new EventEmitter();
    let received;
    ee.on("test", (data) => (received = data));
    ee.emit("test", { value: 42 });
    assert.deepEqual(received, { value: 42 });
  });

  it("supports multiple listeners for same event", () => {
    const ee = new EventEmitter();
    let count = 0;
    ee.on("click", () => count++);
    ee.on("click", () => count++);
    ee.emit("click");
    assert.equal(count, 2);
  });

  it("on() returns unsubscribe function", () => {
    const ee = new EventEmitter();
    let count = 0;
    const off = ee.on("ping", () => count++);
    ee.emit("ping");
    off();
    ee.emit("ping");
    assert.equal(count, 1);
  });
});

describe("EventEmitter.off", () => {
  it("removes a specific handler", () => {
    const ee = new EventEmitter();
    let count = 0;
    const handler = () => count++;
    ee.on("ev", handler);
    ee.off("ev", handler);
    ee.emit("ev");
    assert.equal(count, 0);
  });

  it("is a no-op for non-existent event", () => {
    const ee = new EventEmitter();
    assert.doesNotThrow(() => ee.off("ghost", () => {}));
  });
});

describe("EventEmitter.listenerCount", () => {
  it("returns 0 for unknown events", () => {
    const ee = new EventEmitter();
    assert.equal(ee.listenerCount("nope"), 0);
  });

  it("returns correct count after add/remove", () => {
    const ee = new EventEmitter();
    const h1 = () => {};
    const h2 = () => {};
    ee.on("x", h1);
    ee.on("x", h2);
    assert.equal(ee.listenerCount("x"), 2);
    ee.off("x", h1);
    assert.equal(ee.listenerCount("x"), 1);
  });
});

describe("EventEmitter.clearEvent / clearAll", () => {
  it("clearEvent removes all listeners for one event", () => {
    const ee = new EventEmitter();
    ee.on("a", () => {});
    ee.on("b", () => {});
    ee.clearEvent("a");
    assert.equal(ee.listenerCount("a"), 0);
    assert.equal(ee.listenerCount("b"), 1);
  });

  it("clearAll removes all listeners", () => {
    const ee = new EventEmitter();
    ee.on("a", () => {});
    ee.on("b", () => {});
    ee.clearAll();
    assert.equal(ee.listenerCount("a"), 0);
    assert.equal(ee.listenerCount("b"), 0);
  });
});

describe("EventEmitter error isolation", () => {
  it("continues emitting to other handlers if one throws", () => {
    const ee = new EventEmitter();
    let second = false;
    ee.on("ev", () => {
      throw new Error("boom");
    });
    ee.on("ev", () => {
      second = true;
    });
    assert.doesNotThrow(() => ee.emit("ev"));
    assert.equal(second, true);
  });
});
