var AWS = require('../core');
var regionConfig = require('../region_config');
var ENV_REGIONAL_ENDPOINT_ENABLED = 'AWS_STS_REGIONAL_ENDPOINTS';
var CONFIG_REGIONAL_ENDPOINT_ENABLED = 'sts_regional_endpoints';

AWS.util.update(AWS.STS.prototype, {
  /**
   * @overload credentialsFrom(data, credentials = null)
   *   Creates a credentials object from STS response data containing
   *   credentials information. Useful for quickly setting AWS credentials.
   *
   *   @note This is a low-level utility function. If you want to load temporary
   *     credentials into your process for subsequent requests to AWS resources,
   *     you should use {AWS.TemporaryCredentials} instead.
   *   @param data [map] data retrieved from a call to {getFederatedToken},
   *     {getSessionToken}, {assumeRole}, or {assumeRoleWithWebIdentity}.
   *   @param credentials [AWS.Credentials] an optional credentials object to
   *     fill instead of creating a new object. Useful when modifying an
   *     existing credentials object from a refresh call.
   *   @return [AWS.TemporaryCredentials] the set of temporary credentials
   *     loaded from a raw STS operation response.
   *   @example Using credentialsFrom to load global AWS credentials
   *     var sts = new AWS.STS();
   *     sts.getSessionToken(function (err, data) {
   *       if (err) console.log("Error getting credentials");
   *       else {
   *         AWS.config.credentials = sts.credentialsFrom(data);
   *       }
   *     });
   *   @see AWS.TemporaryCredentials
   */
  credentialsFrom: function credentialsFrom(data, credentials) {
    if (!data) return null;
    if (!credentials) credentials = new AWS.TemporaryCredentials();
    credentials.expired = false;
    credentials.accessKeyId = data.Credentials.AccessKeyId;
    credentials.secretAccessKey = data.Credentials.SecretAccessKey;
    credentials.sessionToken = data.Credentials.SessionToken;
    credentials.expireTime = data.Credentials.Expiration;
    return credentials;
  },

  assumeRoleWithWebIdentity: function assumeRoleWithWebIdentity(params, callback) {
    return this.makeUnauthenticatedRequest('assumeRoleWithWebIdentity', params, callback);
  },

  assumeRoleWithSAML: function assumeRoleWithSAML(params, callback) {
    return this.makeUnauthenticatedRequest('assumeRoleWithSAML', params, callback);
  },

  /**
   * @api private
   */
  validateRegionalEndpointsFlag: function validateRegionalEndpointsFlag() {
    //validate config value
    var config = this.config;
    if (
      typeof config.stsRegionalEndpoints === 'string' &&
      ['legacy', 'regional'].indexOf(config.stsRegionalEndpoints.toLowerCase()) >= 0
    ) {
      config.stsRegionalEndpoints = config.stsRegionalEndpoints.toLowerCase();
      return;
    }
    if (config.stsRegionalEndpoints) {
      throw AWS.util.error(new Error(), {
        code: 'InvalidConfiguration',
        message: 'invalid "stsRegionalEndpoints" configuration. Expect "legacy" ' +
        ' or "regional". Got "' + config.stsRegionalEndpoints + '".'
      });
    }
    if (!AWS.util.isNode()) {
      config.stsRegionalEndpoints = 'legacy'; //set default value so not to load env and files later
      return;
    }
    //validate environmental variable
    if (Object.prototype.hasOwnProperty.call(process.env, ENV_REGIONAL_ENDPOINT_ENABLED)) {
      var envFlag = process.env[ENV_REGIONAL_ENDPOINT_ENABLED];
      if (typeof envFlag === 'string' && ['legacy', 'regional'].indexOf(envFlag.toLowerCase()) >= 0) {
        config.stsRegionalEndpoints = envFlag.toLowerCase();
        return;
      } else {
        throw AWS.util.error(new Error(), {
          code: 'InvalidEnvironmentalVariable',
          message: 'invalid ' + ENV_REGIONAL_ENDPOINT_ENABLED + ' environmental variable. Expect "legacy" ' +
          ' or "regional". Got "' + process.env[ENV_REGIONAL_ENDPOINT_ENABLED] + '".'
        });
      }
    }
    //validate shared config file
    var profile = {};
    try {
      var profiles = AWS.util.getProfilesFromSharedConfig(AWS.util.iniLoader);
      profile = profiles[process.env.AWS_PROFILE || AWS.util.defaultProfile];
    } catch (e) {};
    if (Object.prototype.hasOwnProperty.call(profile, CONFIG_REGIONAL_ENDPOINT_ENABLED)) {
      var fileFlag = profile[CONFIG_REGIONAL_ENDPOINT_ENABLED];
      if (typeof fileFlag === 'string' && ['legacy', 'regional'].indexOf(fileFlag.toLowerCase()) >= 0) {
        config.stsRegionalEndpoints = fileFlag.toLowerCase();
        return;
      } else {
        throw AWS.util.error(new Error(), {
          code: 'InvalidConfiguration',
          message: 'invalid '+CONFIG_REGIONAL_ENDPOINT_ENABLED+' profile config. Expect "legacy" ' +
          ' or "regional". Got "' + profile[CONFIG_REGIONAL_ENDPOINT_ENABLED] + '".'
        });
      };
    }
    config.stsRegionalEndpoints = 'legacy';
  },

  /**
   * @api private
   */
  optInRegionalEndpoint: function optInRegionalEndpoint() {
    this.validateRegionalEndpointsFlag();
    var config = this.config;
    if (config.stsRegionalEndpoints === 'regional') {
      regionConfig(this);
      if (!this.isGlobalEndpoint) return;
      this.isGlobalEndpoint = false;
      //client will throw if region is not supplied; request will be signed with specified region
      if (!config.region) {
        throw AWS.util.error(new Error(),
          {code: 'ConfigError', message: 'Missing region in config'});
      }
      var insertPoint = config.endpoint.indexOf('.amazonaws.com');
      config.endpoint = config.endpoint.substring(0, insertPoint) +
        '.' + config.region + config.endpoint.substring(insertPoint);
    }
  },

  validateService: function validateService() {
    this.optInRegionalEndpoint();
  }

});
