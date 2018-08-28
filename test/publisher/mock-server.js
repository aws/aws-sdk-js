var dgram = require('dgram');

function createServer(onListen, onMessage) {
    var server = dgram.createSocket('udp4');
    server.on('error', function(err) {
        server.close();
    });

    server.on('message', function(message, requestInfo) {
        if (typeof onMessage === 'function') {
            onMessage();
        }
    });

    server.on('listening', function() {
        process.nextTick(function() {
            if (typeof onListen === 'function') {
                onListen(server);
            }
        });
    });

    server.bind();
    return server;
}

module.exports = {
    createServer: createServer
};
