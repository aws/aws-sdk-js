var AWS = require('../core');
var STS = require('../../clients/sts');

STSCredentialsCache = AWS.util.inherit({

  /**
   * Optionally cache STS assumed role credentials.
   *
   * @api private
   */
  constructor: function STSCredentialsCache(params, sourceCredentials, options) {
    options = options || {};
    this.params = params;
    this.expiryWindowSeconds = options.expiryWindowSeconds || 60 * 15;
    this.tokenCodeFn = options.tokenCodeFn || null;
    this.useCache = Boolean(options.useCache);
    this.service = new STS({
      credentials: sourceCredentials,
      httpOptions: options.httpOptions,
      region: options.region
    });
  },

  /**
   * @api private
   */
  assignCredentials: function assignCredentials(destinationCredentials, callback) {
    if (!callback) callback = function(err) { if (err) throw err; };

    if (this.useCache) {
      var cacheKey = this.generateCacheKey();
      this.credentialsFromCache(cacheKey, destinationCredentials, callback);
    } else {
      this.createCredentials(null, destinationCredentials, callback);
    }
  },

  /**
   * @api private
   */
  credentialsFromCache: function credentialsFromCache(cacheKey, destinationCredentials, callback) {
    var cachedCreds = this.cacheRead(cacheKey);
    if (this.credsValid(cachedCreds)) {
      this.service.credentialsFrom(cachedCreds, destinationCredentials);
      callback();
    } else {
      this.createCredentials(cacheKey, destinationCredentials, callback);
    }
  },

  /**
   * @api private
   */
  createCredentials: function createCredentials(cacheKey, destinationCredentials, callback) {
    var self = this;

    if (self.params.SerialNumber && self.tokenCodeFn) {
      self.tokenCodeFn(self.params.SerialNumber, function(err, token) {
        if (err) {
          var message;
          if (err instanceof Error) {
            message = err.message;
          } else {
            message = err;
          }
          callback(
            AWS.util.error(
              new Error('Error fetching MFA token: ' + message),
              { code: 'SharedIniFileCredentialsProviderFailure' }
            ));
          return;
        }

        self.params.TokenCode = token;
        self.assumeRole(cacheKey, destinationCredentials, callback);
      });
    } else {
      self.assumeRole(cacheKey, destinationCredentials, callback);
    }
  },

  /**
   * @api private
   */
  assumeRole: function assumeRole(cacheKey, destinationCredentials, callback) {
    var self = this;
    this.service.assumeRole(self.params, function (err, data) {
      if (!err) {
        self.service.credentialsFrom(data, destinationCredentials);
        if (self.useCache && cacheKey) {
          self.cacheWrite(cacheKey, data);
        }
      }
      callback(err);
    });
  },

  /**
   * @api private
   */
  generateCacheKey: function generateCacheKey() {
    var keys = Object.keys(this.params).filter(function(key) {
      return key !== 'RoleSessionName';
    });
    var input = JSON.stringify(this.params, keys.sort());
    return require('crypto').createHash('sha1').update(input).digest('hex');
  },

  /**
   * @api private
   */
  cacheFilepath: function cacheFilepath(cacheKey) {
    var path = require('path');
    var home = require('os').homedir();
    var defaultDir = path.join(home, '.aws', 'cli', 'cache');
    var dir = process.env.AWS_CREDENTIAL_CACHE_DIRECTORY || defaultDir;
    return path.join(dir, cacheKey) + '.json';
  },

  /**
   * @api private
   */
  cacheRead: function cacheRead(cacheKey) {
    try {
      var contents = AWS.util.readFileSync(this.cacheFilepath(cacheKey));
      if (contents) {
        var a = JSON.parse(contents);
        return a;
      }
    } catch (e) {
      return {error: e};
    }
  },

  /**
   * @api private
   */
  cacheWrite: function cacheWrite(cacheKey, data) {
    var fs = require('fs');
    var path = require('path');
    var cacheFilepath = this.cacheFilepath(cacheKey);
    var dir = path.dirname(path.resolve(cacheFilepath));

    // mkdir -p
    dir.split(path.sep).reduce(function(parentDir, childDir) {
      var curDir = path.resolve('/', parentDir, childDir);
      try {
        fs.mkdirSync(curDir);
      } catch (err) {
        if (err.code !== 'EEXIST') {
          throw err;
        }
      }
      return curDir;
    });

    fs.writeFileSync(cacheFilepath, JSON.stringify(data), 'utf-8');
  },

  /**
   * @api private
   */
  credsValid: function credsValid(creds) {
    if (creds && creds['Credentials'] && creds['Credentials']['Expiration']) {
      var now = AWS.util.date.getDate();
      var expiration = new Date(creds['Credentials']['Expiration']);
      var remaining = (expiration.getTime() - now.getTime()) / 1000;
      return remaining > this.expiryWindowSeconds;
    }
    return false;
  },

});

module.exports = STSCredentialsCache;
