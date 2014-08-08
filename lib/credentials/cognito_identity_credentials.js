var AWS = require('../core');

/**
 * Represents credentials retrieved from STS Web Identity Federation using
 * the Amazon Cognito Identity service.
 *
 * By default this provider gets credentials using the
 * {AWS.STS.assumeRoleWithWebIdentity} service operation, after first getting
 * an Open ID token from {AWS.CognitoIdentity.getOpenIdToken}. These operations
 * require an `AccountId` (AWS account ID), `IdentityPoolId` (Amazon Cognito
 * Identity Pool ID), and `RoleArn` containing the ARN of the IAM trust policy
 * for the Amazon Cognito role that the user will log into. In addition, if
 * this credential provider is used to provide authenticated login, the
 * `Logins` map may be set to the tokens provided by the respective identity
 * providers. See {constructor} for an example on creating a credentials
 * object with proper property values.
 *
 * ## Refreshing Credentials from Identity Service
 *
 * In addition to AWS credentials expiring after a given amount of time, the
 * login token from the identity provider will also expire. Once this token
 * expires, it will not be usable to refresh AWS credentials, and another
 * token will be needed. The SDK does not manage refreshing of the token value,
 * but this can be done through a "refresh token" supported by most identity
 * providers. Consult the documentation for the identity provider for refreshing
 * tokens. Once the refreshed token is acquired, you should make sure to update
 * this new token in the credentials object's {params} property. The following
 * code will update the WebIdentityToken, assuming you have retrieved an updated
 * token from the identity provider:
 *
 * ```javascript
 * AWS.config.credentials.params.Logins['graph.facebook.com'] = updatedToken;
 * ```
 *
 * Future calls to `credentials.refresh()` will now use the new token.
 *
 * @!attribute params
 *   @return [map] the map of params passed to
 *     {AWS.CognitoIdentity.getOpenIdToken} and
 *     {AWS.STS.assumeRoleWithWebIdentity}. To update the token, set the
 *     `params.WebIdentityToken` property.
 * @!attribute data
 *   @return [map] the raw data response from the call to
 *     {AWS.STS.assumeRoleWithWebIdentity}. Use this if you want to get
 *     access to other properties from the response.
 * @!attribute identityId
 *   @return [String] the Cognito ID returned by the last call to
 *     {AWS.CognitoIdentity.getOpenIdToken}. This ID represents the actual
 *     final resolved identity ID from Amazon Cognito.
 */
AWS.CognitoIdentityCredentials = AWS.util.inherit(AWS.Credentials, {
  /**
   * @api private
   */
  localStorageKey: {
    id: 'aws.cognito.identity-id',
    providers: 'aws.cognito.identity-providers'
  },

  /**
   * Creates a new credentials object.
   * @param (see AWS.STS.assumeRoleWithWebIdentity)
   * @param (see AWS.CognitoIdentity.getOpenIdToken)
   * @example Creating a new credentials object
   *   AWS.config.credentials = new AWS.CognitoIdentityCredentials({
   *     AccountId: '1234567890',
   *     IdentityPoolId: 'us-east-1:1699ebc0-7900-4099-b910-2df94f52a030',
   *     RoleArn: 'arn:aws:iam::1234567890:role/MYAPP-CognitoIdentity',
   *     Logins: { // optional tokens, used for authenticated login
   *       'graph.facebook.com': 'FBTOKEN',
   *       'www.amazon.com': 'AMAZONTOKEN',
   *       'accounts.google.com': 'GOOGLETOKEN'
   *     },
   *     RoleSessionName: 'web' // optional name, defaults to web-identity
   *   });
   * @see AWS.STS.assumeRoleWithWebIdentity
   */
  constructor: function CognitoIdentityCredentials(params) {
    AWS.Credentials.call(this);
    this.expired = true;
    this.webIdentityCredentials = new AWS.WebIdentityCredentials(params);
    this.cognito = new AWS.CognitoIdentity({params: params});
    this.sts = new AWS.STS();
    this.params = params;
    this.data = null;
    this.identityId = null;
    this.loadCachedId();
  },

  /**
   * Refreshes credentials using {AWS.STS.assumeRoleWithWebIdentity}
   *
   * @callback callback function(err)
   *   Called when the STS service responds (or fails). When
   *   this callback is called with no error, it means that the credentials
   *   information has been loaded into the object (as the `accessKeyId`,
   *   `secretAccessKey`, and `sessionToken` properties).
   *   @param err [Error] if an error occurred, this value will be filled
   * @see get
   */
  refresh: function refresh(callback) {
    var self = this;
    self.data = null;
    self.identityId = null;
    self.getId(function(err) {
      if (!err) {
        self.cognito.getOpenIdToken(function(cogErr, data) {
          if (!cogErr) {
            self.cacheId(data);
            self.params.WebIdentityToken = data.Token;
            self.webIdentityCredentials.refresh(function(webErr) {
              if (!webErr) {
                self.data = self.webIdentityCredentials.data;
                self.sts.credentialsFrom(self.data, self);
              }
              callback(webErr);
            });
          } else {
            callback(cogErr);
          }
        });
      } else {
        callback(err);
      }
    });
  },

  /**
   * Retrieves a Cognito ID, loading from cache if it was already retrieved
   * on this device.
   *
   * @note If not loaded explicitly, the Cognito ID is loaded and stored in
   *   localStorage in the browser environment of a device.
   */
  getId: function getId(callback) {
    var self = this;
    if (typeof self.params.IdentityId === 'string') return callback();

    self.cognito.getId(function(err, data) {
      if (!err && data.IdentityId) {
        self.params.IdentityId = data.IdentityId;
      }
      callback(err, data);
    });
  },

  /**
   * @api private
   */
  loadCachedId: function loadCachedId() {
    var self = this;

    // in the browser we source default IdentityId from localStorage
    if (AWS.util.isBrowser() && !self.params.IdentityId) {
      var storage = window.localStorage;
      var id = storage[self.localStorageKey.id];
      if (id && self.params.Logins) {
        var actualProviders = Object.keys(self.params.Logins);
        var cachedProviders =
          (storage[self.localStorageKey.providers] || '').split(',');

        // only load ID if at least one provider used this ID before
        var intersect = cachedProviders.filter(function(n) {
          return actualProviders.indexOf(n) !== -1;
        });
        if (intersect.length !== 0) {
          self.params.IdentityId = id;
        }
      } else if (id) {
        self.params.IdentityId = id;
      }
    }
  },

  /**
   * @api private
   */
  cacheId: function cacheId(data) {
    this.identityId = data.IdentityId;
    this.params.IdentityId = this.identityId;

    // cache this IdentityId in browser localStorage if possible
    if (AWS.util.isBrowser()) {
      var storage = window.localStorage;
      storage[this.localStorageKey.id] = data.IdentityId;

      if (this.params.Logins) {
        storage[this.localStorageKey.providers] =
          Object.keys(this.params.Logins).join(',');
      }
    }
  }
});
