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
  validateRegionalEndpointsFlagValue: function validateRegionalEndpointsFlagValue(configValue, errorOptions) {
    if (typeof configValue === 'string' && ['legacy', 'regional'].indexOf(configValue.toLowerCase()) >= 0) {
      this.config.stsRegionalEndpoints = configValue.toLowerCase();
      return;
    } else {
      throw AWS.util.error(new Error(), errorOptions);
    }
  },

  /**
   * @api private
   */
  validateRegionalEndpointsFlag: function validateRegionalEndpointsFlag() {
    //validate config value
    var config = this.config;
    if (config.stsRegionalEndpoints) {
      this.validateRegionalEndpointsFlagValue(config.stsRegionalEndpoints, {
        code: 'InvalidConfiguration',
        message: 'invalid "stsRegionalEndpoints" configuration. Expect "legacy" ' +
        ' or "regional". Got "' + config.stsRegionalEndpoints + '".'
      });
    }
    if (!AWS.util.isNode()) return;
    //validate environmental variable
    if (Object.prototype.hasOwnProperty.call(process.env, ENV_REGIONAL_ENDPOINT_ENABLED)) {
      var envFlag = process.env[ENV_REGIONAL_ENDPOINT_ENABLED];
      this.validateRegionalEndpointsFlagValue(envFlag, {
        code: 'InvalidEnvironmentalVariable',
        message: 'invalid ' + ENV_REGIONAL_ENDPOINT_ENABLED + ' environmental variable. Expect "legacy" ' +
        ' or "regional". Got "' + process.env[ENV_REGIONAL_ENDPOINT_ENABLED] + '".'
      });
    }
    //validate shared config file
    var profile = {};
    try {
      var profiles = AWS.util.getProfilesFromSharedConfig(AWS.util.iniLoader);
      profile = profiles[process.env.AWS_PROFILE || AWS.util.defaultProfile];
    } catch (e) {};
    if (profile && Object.prototype.hasOwnProperty.call(profile, CONFIG_REGIONAL_ENDPOINT_ENABLED)) {
      var fileFlag = profile[CONFIG_REGIONAL_ENDPOINT_ENABLED];
      this.validateRegionalEndpointsFlagValue(fileFlag, {
        code: 'InvalidConfiguration',
        message: 'invalid '+CONFIG_REGIONAL_ENDPOINT_ENABLED+' profile config. Expect "legacy" ' +
        ' or "regional". Got "' + profile[CONFIG_REGIONAL_ENDPOINT_ENABLED] + '".'
      });
    }
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
