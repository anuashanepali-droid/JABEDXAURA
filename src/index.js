'use strict';
class JabedFCAError extends Error { constructor(message, options) { super(message, options); this.name = this.constructor.name; } }
class NotImplementedError extends JabedFCAError {}
class AdapterError extends JabedFCAError {}
class TimeoutError extends JabedFCAError {}
class SessionError extends JabedFCAError {}
module.exports = { JabedFCAError, NotImplementedError, AdapterError, TimeoutError, SessionError };
