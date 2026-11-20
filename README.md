# JABED-FCA

A clean Node.js project scaffold for a modular FCA-style API and adapter architecture. This starter is **not** a working Facebook login client and does not implement platform authentication, scraping, session bypass, checkpoint bypass, or automated messaging.

## Requirements
- Node.js 20+

## Install locally
```bash
npm install
```

## Import
```js
const { createClient, Events } = require('jabed-fca');
const client = createClient({ logLevel: 'info' });
client.on(Events.ERROR, err => console.error(err));
```

## Adapter interface
Adapters should only be implemented for systems and accounts you are authorized to access and should respect platform terms, rate limits, and security controls. Register an adapter with `client.registerAdapter(adapter)` and call it using `client.invoke(method, ...args)`.

## Project layout
- `src/core/client.js` — client lifecycle and adapter dispatch
- `src/events/` — event-name constants
- `src/errors/` — error classes
- `docs/` — architecture and release notes
- `examples/` — basic usage

## Package naming
`jabed-fca` is the proposed unscoped npm package name. Availability must be checked on npm before publishing. Scoped alternative: `@jabed/fca`.
