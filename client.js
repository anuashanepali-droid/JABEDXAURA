'use strict';
const EventEmitter = require('node:events');
const { NotImplementedError } = require('../errors');
const Events = require('../events');

class Client extends EventEmitter {
  constructor(options = {}) {
    super();
    this.options = Object.freeze({ logLevel: 'info', ...options });
    this.connected = false;
  }
  /** Lifecycle hook placeholder. No platform authentication is performed. */
  async connect() { throw new NotImplementedError('Authentication/connection adapter is not included in this scaffold.'); }
  async disconnect() { this.connected = false; this.emit(Events.DISCONNECTED); }
  /** Extension point for an adapter that you own and are authorized to operate. */
  registerAdapter(adapter) {
    if (!adapter || typeof adapter !== 'object') throw new TypeError('adapter must be an object');
    this.adapter = adapter;
    return this;
  }
  async invoke(method, ...args) {
    if (!this.adapter || typeof this.adapter[method] !== 'function') {
      throw new NotImplementedError(`Adapter method '${method}' is not registered.`);
    }
    return this.adapter[method](...args);
  }
}
module.exports = Client;
