var AWS = require('./core');
var SharedIniFile = require('./shared_ini');
/**
 * @api private
 */
function resolveMonitoringConfig(options) {
  var config = {
    port: undefined,
    clientId: undefined,
    enabled: undefined,
  }
  if (fromEnvironment(config)) return config;
  if (fromConfigFile(config, options)) return config;
  return config;
}

/**
 * @api private
 */
function fromEnvironment(config) {
  config.port = config.port || process.env.AWSCSMPORT;
  config.enabled = config.enabled || process.env.AWSCSMENABLED;
  config.clientId = config.clientId || process.env.AWSCSMCLIENT_ID;
  return config.port && config.enabled && config.clientId;
}

/**
 * @api private
 */
function fromConfigFile(config, options) {
  var profile = process.env.AWS_PROFILE || AWS.util.defaultProfile;
  var file = process.env[AWS.util.sharedConfigFileEnv]
  var configFile = new SharedIniFile({
    isConfig: true,
    filename: file
  })
  var inFileConfig = configFile.getProfile(profile);
  config.port = config.port || inFileConfig.port;
  config.enabled = config.enabled || inFileConfig.enabled;
  config.clientId = config.clientId || inFileConfig.clientId;
  return config.port && config.enabled && config.clientId;
}

module.exports = resolveMonitoringConfig
