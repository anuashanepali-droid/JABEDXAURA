'use strict';
const Client = require('./src/core/client');
const Events = require('./src/events');
const errors = require('./src/errors');

/** Create a JABED-FCA client scaffold. Platform-specific authenticated operations are intentionally not implemented. */
function createClient(options = {}) { return new Client(options); }
module.exports = { createClient, Client, Events, ...errors };
