var AWS = require('./core');

/**
 * @constructor
 */
AWS.Config = function Config(options) {
  if (options === undefined) {
    options = {};
  }

  if (options.credentials) {
    this.credentials = new AWS.Credentials(options.credentials);
  } else {
    this.credentials = new AWS.Credentials(options);
  }

  this.set('region', options.region);
  this.set('maxRetries', options.maxRetries);
  this.set('useSSL', options.useSSL, true);
  this.set('debug', options.debug, false);
};

AWS.Config.prototype = {
  set: function set(property, value, defaultValue) {
    if (value === undefined) {
      if (typeof(defaultValue) === 'function') {
        this[property] = new defaultValue(this);
      } else {
        this[property] = defaultValue;
      }
    } else {
      this[property] = value;
    }
  }
};

AWS.FileSystemConfig = function FileSystemConfig(filename) {
  this.__proto__ = AWS.Config.prototype;
  var data = require('fs').readFileSync(filename, 'ascii');
  AWS.Config.apply(this, [JSON.parse(data)]);
};

/**
 * @constructor
 */
AWS.Credentials = function Credentials(accessKeyId, secretAccessKey, sessionToken) {
  if (arguments.length == 0) return;
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
};

/**
 * @constructor
 */
AWS.Endpoint = function Endpoint(config) {
  if (arguments.length == 0) return;
  this.region = config.region;
  this.scheme = config.useSSL ? 'https' : 'http';
  this.host = 'dynamodb.' + config.region + '.amazonaws.com';
  this.port = config.useSSL ? 443 : 80;
};

AWS.Endpoint.prototype = {
  toString: function toString() {
    return this.scheme + '://' + this.host + ':' + this.port;
  }
};
