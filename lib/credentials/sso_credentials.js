var AWS = require('../core');
var path = require('path');
var crypto = require('crypto');
var iniLoader = AWS.util.iniLoader;

/**
 * Represents credentials loaded from shared credentials file
 * (defaulting to ~/.aws/credentials or defined by the
 * `AWS_SHARED_CREDENTIALS_FILE` environment variable).
 *
 * ## Using SSO credentials
 *
 * The credentials file can specify a credential provider relies on an AWS SSO session:
 *
 *     [default]
 *     sso_account_id = 012345678901
 *     sso_region = us-east-1
 *     sso_role_name = SampleRole
 *     sso_start_url = https://d-abc123.awsapps.com/start
 *
 * ## Using custom profiles
 *
 * The SDK supports loading credentials for separate profiles. This can be done
 * in two ways:
 *
 * 1. Set the `AWS_PROFILE` environment variable in your process prior to
 *    loading the SDK.
 * 2. Directly load the AWS.SingleSignOnCredentials provider:
 *
 * ```javascript
 * var creds = new AWS.SingleSignOnCredentials({profile: 'myprofile'});
 * AWS.config.credentials = creds;
 * ```
 *
 * @!macro nobrowser
 */
AWS.SingleSignOnCredentials = AWS.util.inherit(AWS.Credentials, {
  /**
   * Creates a new SingleSignOnCredentials object.
   *
   * @param options [map] a set of options
   * @option options profile [String] (AWS_PROFILE env var or 'default')
   *   the name of the profile to load.
   * @option options filename [String] ('~/.aws/credentials' or defined by
   *   AWS_SHARED_CREDENTIALS_FILE process env var)
   *   the filename to use when loading credentials.
   * @option options callback [Function] (err) Credentials are eagerly loaded
   *   by the constructor. When the callback is called with no error, the
   *   credentials have been loaded successfully.
   */
  constructor: function SingleSignOnCredentials(options) {
    AWS.Credentials.call(this);

    options = options || {};
    this.errorCode = 'SingleSignOnCredentialsProviderFailure';
    this.expired = true;

    this.filename = options.filename;
    this.profile = options.profile || process.env.AWS_PROFILE || AWS.util.defaultProfile;
    this.service = options.ssoClient;
    this.get(options.callback || AWS.util.fn.noop);
  },

  /**
   * @api private
   */
  load: function load(callback) {
    var self = this;
    try {
      var profiles = AWS.util.getProfilesFromSharedConfig(iniLoader, this.filename);
      var profile = profiles[this.profile] || {};

      if (Object.keys(profile).length === 0) {
        throw AWS.util.error(
          new Error('Profile ' + this.profile + ' not found'),
          { code: self.errorCode }
        );
      }
      if (!profile.sso_start_url || !profile.sso_account_id || !profile.sso_region || !profile.sso_role_name) {
        throw AWS.util.error(
          new Error('Profile ' + this.profile + ' does not have valid SSO credentials. Required parameters "sso_account_id", "sso_region", ' +
          '"sso_role_name", "sso_start_url". Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html'),
          { code: self.errorCode }
        );
      }

      var hasher = crypto.createHash('sha1');
      var fileName = hasher.update(profile.sso_start_url).digest('hex') + '.json';

      var cachePath = path.join(
        iniLoader.getHomeDir(),
        '.aws',
        'sso',
        'cache',
        fileName
      );
      var cacheFile = AWS.util.readFileSync(cachePath);
      var cacheContent = null;
      if (cacheFile) {
        cacheContent = JSON.parse(cacheFile);
      }

      if (!cacheContent) {
        throw AWS.util.error(
          new Error('Cached credentials not found under ' + this.profile + ' profile. Please make sure you log in with "aws sso login" first'),
          { code: self.errorCode }
        );
      }

      if (!self.service || self.service.config.region !== profile.sso_region) {
        self.service = new AWS.SSO({ region: profile.sso_region });
      }
      var request = {
        accessToken: cacheContent.accessToken,
        accountId: profile.sso_account_id,
        roleName: profile.sso_role_name,
      };
      self.service.getRoleCredentials(request, function(err, data) {
        if (err || !data || !data.roleCredentials) {
          callback(AWS.util.error(
            err || new Error('Please log in using "aws sso login"'),
            { code: self.errorCode }
          ), null);
        } else {
          self.expired = false;
          self.accessKeyId = data.roleCredentials.accessKeyId;
          self.secretAccessKey = data.roleCredentials.secretAccessKey;
          self.sessionToken = data.roleCredentials.sessionToken;
          self.expireTime = new Date(data.roleCredentials.expiration);
          callback(null);
        }
      });
    } catch (err) {
      callback(err);
    }
  },

  /**
   * Loads the credentials from the AWS SSO process
   *
   * @callback callback function(err)
   *   Called after the AWS SSO process has been executed. When this
   *   callback is called with no error, it means that the credentials
   *   information has been loaded into the object (as the `accessKeyId`,
   *   `secretAccessKey`, and `sessionToken` properties).
   *   @param err [Error] if an error occurred, this value will be filled
   * @see get
   */
  refresh: function refresh(callback) {
    iniLoader.clearCachedFiles();
    this.coalesceRefresh(callback || AWS.util.fn.callback);
  },
});
