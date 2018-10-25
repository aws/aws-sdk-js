var AWS = require('../core');
var STS = require('../../clients/sts');
var iniLoader = AWS.util.iniLoader;

/**
 * Represents credentials loaded from shared credentials file
 * (defaulting to ~/.aws/credentials or defined by the
 * `AWS_SHARED_CREDENTIALS_FILE` environment variable).
 *
 * ## Using the shared credentials file
 *
 * This provider is checked by default in the Node.js environment. To use the
 * credentials file provider, simply add your access and secret keys to the
 * ~/.aws/credentials file in the following format:
 *
 *     [default]
 *     aws_access_key_id = AKID...
 *     aws_secret_access_key = YOUR_SECRET_KEY
 *
 * ## Using custom profiles
 *
 * The SDK supports loading credentials for separate profiles. This can be done
 * in two ways:
 *
 * 1. Set the `AWS_PROFILE` environment variable in your process prior to
 *    loading the SDK.
 * 2. Directly load the AWS.SharedIniFileCredentials provider:
 *
 * ```javascript
 * var creds = new AWS.SharedIniFileCredentials({profile: 'myprofile'});
 * AWS.config.credentials = creds;
 * ```
 *
 * @!macro nobrowser
 */
AWS.SharedIniFileCredentials = AWS.util.inherit(AWS.Credentials, {
  /**
   * Creates a new SharedIniFileCredentials object.
   *
   * @param options [map] a set of options
   * @option options profile [String] (AWS_PROFILE env var or 'default')
   *   the name of the profile to load.
   * @option options filename [String] ('~/.aws/credentials' or defined by
   *   AWS_SHARED_CREDENTIALS_FILE process env var)
   *   the filename to use when loading credentials.
   * @option options disableAssumeRole [Boolean] (false) True to disable
   *   support for profiles that assume an IAM role. If true, and an assume
   *   role profile is selected, an error is raised.
   * @option options preferStaticCredentials [Boolean] (false) True to
   *   prefer static credentials to role_arn if both are present.
   * @option options tokenCodeFn [Function] (null) Function to provide
   *   STS Assume Role TokenCode, if mfa_serial is provided for profile in ini
   *   file. Function is called with value of mfa_serial and callback, and
   *   should provide the TokenCode or an error to the callback in the format
   *   callback(err, token)
   * @option options httpOptions [map] A set of options to pass to the low-level
   *   HTTP request. Currently supported options are:
   *   * **proxy** [String] &mdash; the URL to proxy requests through
   *   * **agent** [http.Agent, https.Agent] &mdash; the Agent object to perform
   *     HTTP requests with. Used for connection pooling. Defaults to the global
   *     agent (`http.globalAgent`) for non-SSL connections. Note that for
   *     SSL connections, a special Agent object is used in order to enable
   *     peer certificate verification. This feature is only available in the
   *     Node.js environment.
   *   * **connectTimeout** [Integer] &mdash; Sets the socket to timeout after
   *     failing to establish a connection with the server after
   *     `connectTimeout` milliseconds. This timeout has no effect once a socket
   *     connection has been established.
   *   * **timeout** [Integer] &mdash; Sets the socket to timeout after timeout
   *     milliseconds of inactivity on the socket. Defaults to two minutes
   *     (120000).
   *   * **xhrAsync** [Boolean] &mdash; Whether the SDK will send asynchronous
   *     HTTP requests. Used in the browser environment only. Set to false to
   *     send requests synchronously. Defaults to true (async on).
   *   * **xhrWithCredentials** [Boolean] &mdash; Sets the "withCredentials"
   *     property of an XMLHttpRequest object. Used in the browser environment
   *     only. Defaults to false.
   */
  constructor: function SharedIniFileCredentials(options) {
    AWS.Credentials.call(this);

    options = options || {};

    this.refreshCallbacks = [];
    this.filename = options.filename;
    this.profile = options.profile || process.env.AWS_PROFILE || AWS.util.defaultProfile;
    this.disableAssumeRole = Boolean(options.disableAssumeRole);
    this.preferStaticCredentials = Boolean(options.preferStaticCredentials);
    this.tokenCodeFn = options.tokenCodeFn || null;
    this.httpOptions = options.httpOptions || null;
    this.get(function() {});
  },

  /**
   * @api private
   */
  callRefreshCallbacks: function (err) {
    var cb;
    while ((cb = this.refreshCallbacks.shift()) !== undefined) {
      cb(err);
    }
  },

  /**
   * Loads the credentials from the shared credentials file
   *
   * @callback callback function(err)
   *   Called after the shared INI file on disk is read and parsed. When this
   *   callback is called with no error, it means that the credentials
   *   information has been loaded into the object (as the `accessKeyId`,
   *   `secretAccessKey`, and `sessionToken` properties).
   *   @param err [Error] if an error occurred, this value will be filled
   * @see get
   */
  refresh: function refresh(callback) {
    if (!callback) callback = function(err) { if (err) throw err; };
    this.refreshCallbacks.push(callback);
    if (this.refreshCallbacks.length > 1) { return; }

    try {
      var profiles = {};
      var profilesFromConfig = {};
      if (process.env[AWS.util.configOptInEnv]) {
        var profilesFromConfig = iniLoader.loadFrom({
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
      var profile = profiles[this.profile] || {};

      if (Object.keys(profile).length === 0) {
        throw AWS.util.error(
          new Error('Profile ' + this.profile + ' not found'),
          { code: 'SharedIniFileCredentialsProviderFailure' }
        );
      }

      /*
      In the CLI, the presence of both a role_arn and static credentials have
      different meanings depending on how many profiles have been visited. For
      the first profile processed, role_arn takes precedence over any static
      credentials, but for all subsequent profiles, static credentials are
      used if present, and only in their absence will the profile's
      source_profile and role_arn keys be used to load another set of
      credentials. This var is intended to yield compatible behaviour in this
      sdk.
      */
      var preferStaticCredentialsToRoleArn = Boolean(
        this.preferStaticCredentials
        && profile['aws_access_key_id']
        && profile['aws_secret_access_key']
      );

      if (profile['role_arn'] && !preferStaticCredentialsToRoleArn) {
        this.loadRoleProfile(profiles, profile);
        return;
      }

      this.accessKeyId = profile['aws_access_key_id'];
      this.secretAccessKey = profile['aws_secret_access_key'];
      this.sessionToken = profile['aws_session_token'];

      if (!this.accessKeyId || !this.secretAccessKey) {
        throw AWS.util.error(
          new Error('Credentials not set for profile ' + this.profile),
          { code: 'SharedIniFileCredentialsProviderFailure' }
        );
      }
      this.expired = false;
      this.callRefreshCallbacks();
    } catch (err) {
      this.callRefreshCallbacks(err);
    }
  },

  /**
   * @api private
   */
  loadRoleProfile: function loadRoleProfile(creds, roleProfile) {
    if (this.disableAssumeRole) {
      throw AWS.util.error(
        new Error('Role assumption profiles are disabled. ' +
                  'Failed to load profile ' + this.profile +
                  ' from ' + creds.filename),
        { code: 'SharedIniFileCredentialsProviderFailure' }
      );
    }

    var self = this;
    var roleArn = roleProfile['role_arn'];
    var roleSessionName = roleProfile['role_session_name'];
    var externalId = roleProfile['external_id'];
    var mfaSerial = roleProfile['mfa_serial'];
    var sourceProfileName = roleProfile['source_profile'];

    if (!sourceProfileName) {
      throw AWS.util.error(
        new Error('source_profile is not set using profile ' + this.profile),
        { code: 'SharedIniFileCredentialsProviderFailure' }
      );
    }

    var sourceProfileExistanceTest = creds[sourceProfileName];

    if (typeof sourceProfileExistanceTest !== 'object') {
      throw AWS.util.error(
        new Error('source_profile ' + sourceProfileName + ' using profile '
          + this.profile + ' does not exist'),
        { code: 'SharedIniFileCredentialsProviderFailure' }
      );
    }

    var sourceCredentials = new AWS.SharedIniFileCredentials(
      AWS.util.merge(this.options || {}, {
        profile: sourceProfileName,
        preferStaticCredentials: true
      })
    );

    this.roleArn = roleArn;
    var sts = new STS({
      credentials: sourceCredentials,
      httpOptions: this.httpOptions
    });

    var roleParams = {
      RoleArn: roleArn,
      RoleSessionName: roleSessionName || 'aws-sdk-js-' + Date.now()
    };

    if (externalId) {
      roleParams.ExternalId = externalId;
    }

    if (mfaSerial && self.tokenCodeFn) {
      roleParams.SerialNumber = mfaSerial;
      self.tokenCodeFn(mfaSerial, function(err, token) {
        if (err) {
          var message;
          if (err instanceof Error) {
            message = err.message;
          } else {
            message = err;
          }
          self.callRefreshCallbacks(
            AWS.util.error(
              new Error('Error fetching MFA token: ' + message),
              { code: 'SharedIniFileCredentialsProviderFailure' }
            ));
          return;
        }

        roleParams.TokenCode = token;
        self.assumeRole(sts, roleParams);
      });
      return;
    }

    self.assumeRole(sts, roleParams);
  },

  /**
   * @api private
   */
  assumeRole: function(sts, roleParams) {
    var self = this;
    sts.assumeRole(roleParams, function (err, data) {
      if (err) {
        self.callRefreshCallbacks(err);
        return;
      }

      self.accessKeyId = data.Credentials.AccessKeyId;
      self.secretAccessKey = data.Credentials.SecretAccessKey;
      self.sessionToken = data.Credentials.SessionToken;
      self.expireTime = data.Credentials.Expiration;
      self.callRefreshCallbacks();
    });
  }

});
