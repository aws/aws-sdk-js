var AWS = require('../core');
var fs = require('fs');
var iniLoader = AWS.util.iniLoader;

/**
 * Represents OIDC credentials from a file on disk
 * If the credentials expire, the SDK can {refresh} the credentials
 * from the file.
 *
 * ## Using the web identity token file
 *
 * This provider is checked by default in the Node.js environment. To use
 * the provider simply add your OIDC token to a file (ASCII encoding) and
 * share the filename in either AWS_WEB_IDENTITY_TOKEN_FILE environment
 * variable or web_identity_token_file shared config variable
 *
 * The file contains encoded OIDC token and the characters are
 * ASCII encoded. OIDC tokens are JSON Web Tokens (JWT).
 * JWT's are 3 base64 encoded strings joined by the '.' character.
 *
 * This class will read filename from AWS_WEB_IDENTITY_TOKEN_FILE
 * environment variable or web_identity_token_file shared config variable,
 * and get the OIDC token from filename.
 * It will also read IAM role to be assumed from AWS_IAM_ROLE_ARN
 * environment variable or role_arn shared config variable.
 * This provider gets credetials using the {AWS.STS.assumeRoleWithWebIdentity}
 * service operation
 *
 * @!macro nobrowser
 */
AWS.TokenFileWebIdentityCredentials = AWS.util.inherit(AWS.Credentials, {

  /**
   * @example Creating a new credentials object
   *  AWS.config.credentials = new AWS.TokenFileWebIdentityCredentials(
   *   // optionally provide configuration to apply to the underlying AWS.STS service client
   *   // if configuration is not provided, then configuration will be pulled from AWS.config
   *   {
   *     // specify timeout options
   *     httpOptions: {
   *       timeout: 100
   *     }
   *   });
   * @see AWS.Config
   */
  constructor: function TokenFileWebIdentityCredentials(clientConfig) {
    AWS.Credentials.call(this);
    this.clientConfig = clientConfig;
    this.get(function() {});
  },

  /**
   * Returns params from environment variables
   *
   * @api private
   */
  getParamsFromEnv: function getParamsFromEnv() {
    var ENV_TOKEN_FILE = 'AWS_WEB_IDENTITY_TOKEN_FILE',
        ENV_ROLE_ARN = 'AWS_IAM_ROLE_ARN';
    if (process.env[ENV_TOKEN_FILE] && process.env[ENV_ROLE_ARN]) {
      return {
        envTokenFile: process.env[ENV_TOKEN_FILE],
        roleArn: process.env[ENV_ROLE_ARN],
        roleSessionName: process.env['AWS_IAM_ROLE_SESSION_NAME']
      };
    }
  },

  /**
   * Returns params from shared config variables
   *
   * @api private
   */
  getParamsFromSharedConfig: function getParamsFromSharedConfig() {
    try {
      var profiles = AWS.util.getProfilesFromSharedConfig(iniLoader);
      var profile = profiles[process.env.AWS_PROFILE || AWS.util.defaultProfile] || {};

      if (Object.keys(profile).length === 0) {
        throw AWS.util.error(
          new Error('Profile ' + this.profile + ' not found'),
          { code: 'TokenFileWebIdentityCredentialsProviderFailure' }
        );
      }

      return {
        envTokenFile: profile['web_identity_token_file'],
        roleArn: profile['role_arn'],
        roleSessionName: profile['role_session_name']
      };
    } catch (err) {
      throw err;
    }
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
   * @see AWS.Credentials.get
   */
  refresh: function refresh(callback) {
    this.coalesceRefresh(callback || AWS.util.fn.callback);
  },

  /**
   * @api private
   */
  load: function load(callback) {
    var self = this;
    try {
      var params = self.getParamsFromEnv();
      if (!params) {
        params = self.getParamsFromSharedConfig();
      }
      if (params) {
        var oidcToken = fs.readFileSync(params.envTokenFile, {encoding: 'ascii'});
        if (self.webIdentityCredentials) {
          self.webIdentityCredentials.service.config.params.WebIdentityToken = oidcToken;
        } else {
          self.webIdentityCredentials = new AWS.WebIdentityCredentials(
            {
              WebIdentityToken: oidcToken,
              RoleArn: params.roleArn,
              RoleSessionName: params.roleSessionName
            },
            self.clientConfig
          );
          self.webIdentityCredentials.createClients();
        }
        self.webIdentityCredentials.refresh(function(webErr) {
          if (!webErr) {
            self.webIdentityCredentials.service.credentialsFrom(
              self.webIdentityCredentials.data,
              self
            );
          }
          callback(webErr);
        });
      }
    } catch (err) {
      callback(err);
    }
  }
});
