const { createClient, Events } = require('../');
const client = createClient();
client.on(Events.ERROR, error => console.error('Client error:', error));
console.log('JABED-FCA scaffold loaded. No network connection has been initiated.');
