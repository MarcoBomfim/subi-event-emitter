import { EventEmitter } from "./eventEmitter";

describe("EventEmitter", () => {
  it("can be constructed", () => {
    const eventEmitter = new EventEmitter();
    expect(eventEmitter).toBeInstanceOf(EventEmitter);
  });

  it("can register a callback for a given event", () => {
    const eventEmitter = new EventEmitter();
    const handler = jest.fn();
    const payload = {};
    eventEmitter.register("mouseClick", handler);
    eventEmitter.emit("mouseClick", payload);
    expect(handler).toBeCalledWith(payload);
  });

  it("can register different callbacks for a different events", () => {
    const eventEmitter = new EventEmitter();
    const mouseClickCallback = jest.fn();
    const keyPressCallback = jest.fn();
    const payload = {};
    eventEmitter.register("mouseClick", mouseClickCallback);
    eventEmitter.register("keyPressCallback", keyPressCallback);
    eventEmitter.emit("mouseClick", payload);
    expect(mouseClickCallback.mock.calls.length).toBe(1);
    const mouseClickCallbackParam1 = mouseClickCallback.mock.calls[0][0];
    expect(mouseClickCallbackParam1).toBe(payload);
    expect(keyPressCallback.mock.calls.length).toBe(0);
  });

  it("can register multiple callbacks for a given event", () => {
    const eventEmitter = new EventEmitter();
    const callbacks = [jest.fn(), jest.fn(), jest.fn()];
    const payload = {};

    eventEmitter.register("mouseClick", callbacks[0]);
    eventEmitter.register("mouseClick", callbacks[1]);
    eventEmitter.register("mouseClick", callbacks[2]);

    eventEmitter.emit("mouseClick", payload);

    expect(callbacks[0]).toBeCalledWith(payload);
    expect(callbacks[1]).toBeCalledWith(payload);
    expect(callbacks[2]).toBeCalledWith(payload);
  });
});
