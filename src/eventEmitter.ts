export class EventEmitter {
  events: { [x: string]: Function[] };

  constructor() {
    this.events = {};
  }

  register = (eventName: string, callbackFn: Function) => {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callbackFn);
  };
}
