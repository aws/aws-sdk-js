var AWS = require('../core');
var os = require('os');
var path = require('path');

/**
 * @api private
 */
module.exports = AWS.util.inherit({
  constructor: function IniLoader() {
    this.resolvedProfiles = {};
  },

  clearCachedFiles: function clearCachedFiles() {
    this.resolvedProfiles = {};
  },

  loadFrom: function loadFrom(options) {
    options = options || {};
    var isConfig = options.isConfig === true;
    var filename = options.filename || this.getDefaultFilePath(isConfig);
    if (!this.resolvedProfiles[filename]) {
      this.resolvedProfiles[filename] = this.parseFile(filename, isConfig);
    }
    return this.resolvedProfiles[filename];
  },

  parseFile: function parseFile(filename, isConfig) {
    if (!isConfig) {
      return AWS.util.ini.parse(AWS.util.readFileSync(filename));
    } else {
      var content = AWS.util.ini.parse(AWS.util.readFileSync(filename));
      var tmpContent = {};
      Object.keys(content).forEach(function(profileName) {
        var profileContent = content[profileName];
        tmpContent[profileName.replace(/^profile\s/, '')] = profileContent;
      })
      return tmpContent;
    }
  },

  /**
   * @api private
   */
  getDefaultFilePath: function getDefaultFilePath(isConfig) {
    return path.join(
      this.getHomeDir(),
      '.aws',
      isConfig ? 'config' : 'credentials'
    );
  },

  /**
   * @api private
   */
  getHomeDir: function getHomeDir() {
    var env = process.env;
    var home = env.HOME ||
      env.USERPROFILE ||
      (env.HOMEPATH ? ((env.HOMEDRIVE || 'C:/') + env.HOMEPATH) : null);

    if (home) {
      return home;
    }

    if (typeof os.homedir === 'function') {
      return os.homedir();
    }

    throw AWS.util.error(
      new Error('Cannot load credentials, HOME path not set')
    );
  }
});