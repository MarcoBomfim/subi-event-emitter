export class EventEmitter {
  events: { [x: string]: Function[] };

  constructor() {
    this.events = {};
  }

 
}