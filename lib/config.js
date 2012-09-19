var AWS = require('./core');
var inherit = AWS.util.inherit;

/**
 * @constructor
 */
AWS.Config = inherit({
  constructor: function Config(options) {
    if (options === undefined) options = {};
    if (options.credentials) {
      this.credentials = new AWS.Credentials(options.credentials);
    } else {
      this.credentials = new AWS.Credentials(options);
    }

    this.set('region', options.region);
    this.set('maxRetries', options.maxRetries);
    this.set('useSSL', options.useSSL, true);
    this.set('debug', options.debug, false);
  },

  set: function set(property, value, defaultValue) {
    if (value === undefined) {
      this[property] = defaultValue;
    } else {
      this[property] = value;
    }
  }
});

AWS.FileSystemConfig = AWS.util.inherit(AWS.Config, {
  constructor: function FileSystemConfig(filename) {
    var data = require('fs').readFileSync(filename, 'ascii');
    AWS.Config.call(this, JSON.parse(data));
  }
});

/**
 * @constructor
 */
AWS.Credentials = inherit({
  constructor: function Credentials(accessKeyId, secretAccessKey, sessionToken) {
    if (arguments.length == 1 && arguments[0].accessKeyId) {
      this.accessKeyId = arguments[0].accessKeyId;
      this.secretAccessKey = arguments[0].secretAccessKey;
      this.sessionToken = arguments[0].sessionToken;
    }
    else {
      this.accessKeyId = accessKeyId;
      this.secretAccessKey = secretAccessKey;
      this.sessionToken = sessionToken;
    }
  }
});

/**
 * @constructor
 */
AWS.Endpoint = inherit({
  constructor: function Endpoint(config) {
    this.region = config.region;
    this.scheme = config.useSSL ? 'https' : 'http';
    this.host = 'dynamodb.' + config.region + '.amazonaws.com';
    this.port = config.useSSL ? 443 : 80;
  }
});

AWS.configuration = new AWS.Config();
