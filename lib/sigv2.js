var AWS = require('./core');
var inherit = AWS.util.inherit;

/**
 * @constructor
 * @extends AWS.RequestSigner
 */
AWS.SigV2 = inherit(AWS.RequestSigner, {

  constructor: function SigV2(request) {
    AWS.RequestSigner.call(this, request);
  },

  addAuthorization: function addAuthorization(credentials, date) {

    if (!date) date = AWS.util.date.getDate();

    var r = this.request;

    r.params.add('Timestamp', date.toISOString());
    r.params.add('SignatureVersion', '2');
    r.params.add('SignatureMethod', 'HmacSHA256');
    r.params.add('AWSAccessKeyId', credentials.accessKeyId);

    if (credentials.sessionToken)
      r.params.add('SecurityToken', credentials.sessionToken);

    r.params.add('Signature', this.signature(credentials));

    r.body = r.params.toString();
    r.headers['Content-Length'] = r.body.length;

  },

  signature: function signature(credentials) {
    return this.sign(this.stringToSign(), credentials);
  },

  sign: function sign(string, credentials) {
    return AWS.util.crypto.hmac(credentials.secretAccessKey, string, 'base64');
  },

  stringToSign: function stringToSign() {

    var host = this.request.endpoint.host;
    var port = this.request.endpoint.port;
    if (port != 80 && port != 443)
      host += ':' + port;

    var parts = [];
    parts.push(this.request.method);
    parts.push(host.toLowerCase());
    parts.push(this.request.pathname());
    parts.push(this.request.params.toString());

    return parts.join('\n');

  }

});
