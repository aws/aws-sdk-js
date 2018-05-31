var AWS = require('../core');
var SharedIniFile = require('../shared_ini');
/**
 * Resolve client-side monitoring configuration from either environmental variables
 * or shared config file. Configurations from environmental variables have higher priority 
 * than those from shared config file. The resolver will try to read the shared config file
 * no matter whether the AWS_SDK_LOAD_CONFIG variable is set.
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
 * Resolve configurations from environmental variables.
 * @param {object} client side monitoring config object needs to be resolved
 * @returns {boolean} whether resolving configurations is done
 * @api private
 */
function fromEnvironment(config) {
  config.port = config.port || process.env.AWS_CSM_PORT;
  config.enabled = config.enabled || process.env.AWS_CSM_ENABLED;
  config.clientId = config.clientId || process.env.AWSCSMCLIENT_ID;
  return config.port && config.enabled && config.clientId ||
    ['false', '0'].indexOf(config.enabled) >= 0; //no need to read shared config file if explicitely disabled
}

/**
 * Resolve cofigurations from shared config file with specified role name
 * @param {object} client side monitoring config object needs to be resolved
 * @returns {boolean} whether resolving configurations is done
 * @api private
 */
function fromConfigFile(config) {
  var profile = process.env.AWS_PROFILE || AWS.util.defaultProfile;
  var file = process.env[AWS.util.sharedConfigFileEnv]
  var inFileConfig;
  try {
    var configFile = new SharedIniFile({
      isConfig: true,
      filename: file
    });
    var inFileConfig = configFile.getProfile(profile);
  } catch(err) {
    return false;
  }
  if (!inFileConfig) return config;
  config.port = config.port || inFileConfig.csm_port;
  config.enabled = config.enabled || inFileConfig.csm_enabled;
  config.clientId = config.clientId || inFileConfig.csm_clientid;
  return config.port && config.enabled && config.clientId;
}

/**
 * Transfer the resolved configuration value to proper types: port as number, enabled
 * as boolean and clientId as string. The 'enabled' flag is valued to false when set 
 * to 'false' or '0'. All other strings including empty string will be seen as true
 * @param {object} resolved client side monitoring config
 * @api private
 */
function toJSType(config) {
    //config.XXX is either undefined or string
  var falsyNotations = ['false', '0', undefined];
  if (!config.enabled || falsyNotations.indexOf(config.enabled.toLowerCase()) >= 0) {
    config.enabled = false;
  } else {
    config.enabled = true;
  }
  config.port = config.port ? parseInt(config.port, 10) : undefined;
  return config;
}

module.exports = resolveMonitoringConfig
