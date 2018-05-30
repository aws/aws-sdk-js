const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const defaultPort = 31000;
const file = require('fs');

server.on('error', (err) => {
  console.log(`server ERROR:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(msg.toString('utf8'));
});

server.on('listening', () => {
  const address = server.address();
  const msg = `server listening ${address.address}:${address.port}`;
  console.log(msg)
})

server.bind(defaultPort);
