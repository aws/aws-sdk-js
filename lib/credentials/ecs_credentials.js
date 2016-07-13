var AWS = require('../core');

/**
 * Represents credentials received from relative URI specified in the ECS container.
 *
 * This class will request refreshable credentials from the relative URI
 * specified by the AWS_CONTAINER_CREDENTIALS_RELATIVE_URI environment variable
 * in the container. If valid credentials are returned in the response, these
 * will be used with zero configuration.
 *
 * This credentials class will timeout after 1 second of inactivity by default.
 * If your requests to the relative URI are timing out, you can increase
 * the value by configuring them directly:
 *
 * ```javascript
 * AWS.config.credentials = new AWS.ECSCredentials({
 *   httpOptions: { timeout: 5000 } // 5 second timeout
 * });
 * ```
 *
 * @!macro nobrowser
 */
AWS.ECSCredentials = AWS.util.inherit(AWS.Credentials, {
  constructor: function ECSCredentials(options) {
    AWS.Credentials.call(this);
    options = options ? AWS.util.copy(options) : {};
    if (!options.httpOptions) options.httpOptions = {};
    options.httpOptions = AWS.util.merge(
      this.httpOptions, options.httpOptions);
    AWS.util.update(this, options);
  },

  /**
   * @api private
   */
  httpOptions: { timeout: 1000 },

  /**
   * @api private
   */
  host: '169.254.170.2',

  /**
   * Sets the name of the ECS environment variable to check for relative URI
   * If changed, please change the name in the documentation for defaultProvider
   * in credential_provider_chain.js and in all tests in test/credentials.spec.coffee
   *
   * @api private
   */
  environmentVar: 'AWS_CONTAINER_CREDENTIALS_RELATIVE_URI',

  /**
   * @api private
   */
  getECSRelativeUri: function getECSRelativeUri() {
    if (process && process.env) return process.env[this.environmentVar];
  },

  /**
   * @api private
   */
  credsFormatIsValid: function credsFormatIsValid(credData) {
    return (!!credData.AccessKeyId && !!credData.SecretAccessKey &&
      !!credData.Token && !!credData.Expiration);
  },

  /**
   * @api private
   */
  request: function request(path, callback) {
    path = path || '/';

    var data = '';
    var http = AWS.HttpClient.getInstance();
    var httpRequest = new AWS.HttpRequest('http://' + this.host + path);
    httpRequest.method = 'GET';
    httpRequest.headers.Accept = 'application/json';
    var httpOptions = this.httpOptions;

    process.nextTick(function() {
      http.handleRequest(httpRequest, httpOptions, function(httpResponse) {
        httpResponse.on('data', function(chunk) { data += chunk.toString(); });
        httpResponse.on('end', function() { callback(null, data); });
      }, callback);
    });
  },

  /**
   * Loads the credentials from the relative URI specified by container
   *
   * @callback callback function(err)
   *   Called when the request to the relative URI responds (or fails). When
   *   this callback is called with no error, it means that the credentials
   *   information has been loaded into the object (as the `accessKeyId`,
   *   `secretAccessKey`, `sessionToken`, and `expireTime` properties).
   *   @param err [Error] if an error occurred, this value will be filled
   * @see get
   */
  refresh: function refresh(callback) {
    var self = this;
    if (!callback) callback = function(err) { if (err) throw err; };

    if (process === undefined) {
      callback(AWS.util.error(
        new Error('No process info available'),
        { code: 'ECSCredentialsProviderFailure' }
      ));
      return;
    }
    var relativeUri = this.getECSRelativeUri();
    if (relativeUri === undefined) {
      callback(AWS.util.error(
        new Error('Variable ' + this.environmentVar + ' not set.'),
        { code: 'ECSCredentialsProviderFailure' }
      ));
      return;
    }

    this.request(relativeUri, function(err, data) {
      if (!err) {
        try {
          var creds = JSON.parse(data);
          if (self.credsFormatIsValid(creds)) {
            self.expired = false;
            self.accessKeyId = creds.AccessKeyId;
            self.secretAccessKey = creds.SecretAccessKey;
            self.sessionToken = creds.Token;
            self.expireTime = new Date(creds.Expiration);
          } else {
            throw AWS.util.error(
              new Error('Response data is not in valid format'),
              { code: 'ECSCredentialsProviderFailure' }
            );
          }
        } catch (dataError) {
          err = dataError;
        }
      }
      callback(err);
    });
  }
});
