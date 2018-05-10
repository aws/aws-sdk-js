var dgram = require('dgram');
var stringToBuffer = require('./string-to-buffer').stringToBuffer;

var MAX_MESSAGE_SIZE = 1024 * 8; // 8 KB

/**
 * Publishes metrics via udp.
 * @param {object} options Paramters for Publisher constructor
 * @param {number} [options.port = 31000] Port number
 * @param {string} [options.clientId = ''] Client Identifier
 * @api private
 */
function Publisher(options) {
    // handle configuration
    options = options || {};
    this.port = options.port || 31000;
    this.clientId = options.clientId || '';
    this.messagesInFlight = 0;
    this.address = 'localhost';
}

/**
 * Handles ApiCall and ApiCallAttempt events.
 * @param {*} event apiCall or apiCallAttempt event.
 * @api private
 */
Publisher.prototype.eventHandler = function(event) {
    // set the clientId
    event.ClientId = this.clientId;

    var message = stringToBuffer(JSON.stringify(event));
    if (message.byteLength > MAX_MESSAGE_SIZE) {
        // drop the message if it is too large
        return;
    }

    this.publishDatagram(message);
}

/**
 * Publishes message to an agent.
 * @param {Buffer} message JSON message to send to agent.
 * @api private
 */
Publisher.prototype.publishDatagram = function(message) {
    var self = this;
    var client = this.getClient();

    this.messagesInFlight++;
    this.client.send(message, 0, message.byteLength, this.port, this.address, function(err, bytes) {
        if (--self.messagesInFlight <= 0) {
            // destroy existing client so the event loop isn't kept open
            self.destroyClient()
        }
    });
}

/**
 * Returns an existing udp socket, or creates one if it doesn't already exist.
 * @api private
 */
Publisher.prototype.getClient = function() {
    if (!this.client) {
        this.client = dgram.createSocket('udp4');
    }
    return this.client;
}

/**
 * Destroys the udp socket.
 * @api private
 */
Publisher.prototype.destroyClient = function() {
    if (this.client) {
        this.client.close();
        this.client = void 0;
    }
}

module.exports = {
    Publisher: Publisher
};