var AWS = require('../core'),
  ENV_TOKEN_FILE = 'AWS_WEB_IDENTITY_TOKEN_FILE',
  ENV_ROLE_ARN = 'AWS_IAM_ROLE_ARN',
  ENV_ROLE_SESSION_NAME = 'AWS_IAM_ROLE_SESSION_NAME';
var iniLoader = AWS.util.iniLoader;
var fs = require('fs');
var STS = require('../../clients/sts');

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
AWS.AssumeRoleWithWebIdentityCredentials = AWS.util.inherit(AWS.Credentials, {

  /**
   * @overload AWS.AssumeRoleWithWebIdentityCredentials(filename)
   *   Creates a new FileSystemCredentials object from a filename
   *
   *   @param filename [String] the path on disk to the JSON file to load.
   */
  constructor: function AssumeRoleWithWebIdentityCredentials(filename) {
    AWS.Credentials.call(this);
    this.filename = filename;
    this.sts = new STS();
    this.get(function() {});
  },

  /**
   * Returns params from environment variables
   *
   * @api private
   */
  getParamsFromEnv: function getParamsFromEnv() {
    if (process.env[ENV_TOKEN_FILE] && process.env[ENV_ROLE_ARN]) {
      return {
        envTokenFile: process.env[ENV_TOKEN_FILE],
        roleArn: process.env[ENV_ROLE_ARN],
        roleSessionName: process.env[ENV_ROLE_SESSION_NAME]
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
      var profiles = {};
      var profilesFromConfig = {};
      if (process.env[AWS.util.configOptInEnv]) {
        profilesFromConfig = iniLoader.loadFrom({
          isConfig: true,
          filename: process.env[AWS.util.sharedConfigFileEnv]
        });
      }
      var profilesFromCreds = iniLoader.loadFrom({
        filename: this.filename ||
          (process.env[AWS.util.configOptInEnv] && process.env[AWS.util.sharedCredentialsFileEnv])
      });
      for (var i = 0, profileNames = Object.keys(profilesFromConfig); i < profileNames.length; i++) {
        profiles[profileNames[i]] = profilesFromConfig[profileNames[i]];
      }
      for (var i = 0, profileNames = Object.keys(profilesFromCreds); i < profileNames.length; i++) {
        profiles[profileNames[i]] = profilesFromCreds[profileNames[i]];
      }
      var profile = profiles[process.env.AWS_PROFILE || AWS.util.defaultProfile] || {};

      if (Object.keys(profile).length === 0) {
        throw AWS.util.error(
          new Error('Profile ' + this.profile + ' not found'),
          { code: 'AssumeRoleWithWebIdentityCredentialsProviderFailure' }
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

  refresh: function refresh(callback) {
    this.coalesceRefresh(
      callback || AWS.util.fn.callback
    );
  },

  /**
   * @api private
   */
  load: function load() {
    try {
      var params = this.getParamsFromEnv();
      if (!params) {
        params = getParamsFromSharedConfig();
      }
      if (params) {
        var oidcToken = fs.readFileSync(params.envTokenFile, {encoding: 'ascii'});
        var creds = this.sts.assumeRoleWithWebIdentity({
          WebIdentityToken: oidcToken,
          RoleArn: params.roleArn,
          RoleSessionName: params.roleSessionName || 'RoleSessionName'
        });
      }
    } catch (err) {
      callback(err);
    }
  }
});
