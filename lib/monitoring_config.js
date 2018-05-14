var AWS = require('./core');
var SharedIniFile = require('./shared_ini');
/**
 * @api private
 */
function resolveMonitoringConfig() {
  var config = {
    port: undefined,
    clientId: undefined,
    enabled: undefined,
  }
  if (fromEnvironment(config) || fromConfigFile(config)) return toJSType(config);
  return toJSType(config);
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
function fromConfigFile(config) {
  var profile = process.env.AWS_PROFILE || AWS.util.defaultProfile;
  var file = process.env[AWS.util.sharedConfigFileEnv]
  var configFile = new SharedIniFile({
    isConfig: true,
    filename: file
  })
  var inFileConfig = configFile.getProfile(profile);
  config.port = config.port || inFileConfig.csm_port;
  config.enabled = config.enabled || inFileConfig.csm_enabled;
  config.clientId = config.clientId || inFileConfig.csm_clientid;
  return config.port && config.enabled && config.clientId;
}

/**
 * @api private
 */
function toJSType(config) {
  var falsyNotations = ['false', '0'];
  config.enabled  = falsyNotations.toLowerCase().indexOf(config.enabled) < 0 ? true : false;
  config.port = config.port ? parseInt(config.port, 10) : undefined;
  return config;
}

module.exports = resolveMonitoringConfig
