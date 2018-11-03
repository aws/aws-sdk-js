const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const defaultPort = 31000;
const file = require('fs');

server.on('error', (err) => {
  server.close();
});

server.on('message', (msg) => {
  console.log(msg.toString('utf8'));
});

server.on('listening', () => {
  const address = server.address();
  const msg = `Server Listening ${address.address}:${address.port}`;
  process.send({
    serverStarted: true,
    port: address.port,
  });
});

//notify the parent process the calls are done and begin the
//monitoring events validation
process.on('message', (m) => {
  if (m.message === 'Sending Done') {
    //wait for another 30ms to finish receiving and echo-ing datagram
    setTimeout(() => {
      server.close();
      process.send({recordingDone: true});
    }, 30);
  }
});

const args = parseArgs();

server.bind(args.port);

function parseArgs() {
  return process.argv.slice(2).reduce((accumulator, curr, index) => {
    const kvPair = curr.trim().toLowerCase().split('=');
    if (kvPair.length === 2) {
      if (kvPair[0] === 'port') {
        kvPair[1] = parseInt(kvPair[1]);
      }
      accumulator[kvPair[0]] = kvPair[1];
    }
    return accumulator;
  }, {port: defaultPort});
}
