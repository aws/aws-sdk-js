var AWS = require('./core');
var os = require('os');
var path = require('path');

/**
 * @api private
 */
AWS.SharedIniFile = AWS.util.inherit({
  constructor: function SharedIniFile(options) {
    options = options || {};

    this.filename = options.filename;
    this.isConfig = options.isConfig === true;
  },

  ensureFileLoaded: function loadFile() {
    if (!this.parsedContents) {
      this.parsedContents = AWS.util.ini.parse(
        AWS.util.readFileSync(this.filename || this.getDefaultFilepath())
      );
    }
  },

  getDefaultFilepath: function getDefaultFilepath() {
    return path.join(
      this.getHomeDir(),
      '.aws',
      this.isConfig ? 'config' : 'credentials'
    );
  },

  getHomeDir: function getHomeDir() {
    if (typeof os.homedir === 'function') {
      return os.homedir();
    }

    var env = process.env;
    var home = env.HOME ||
      env.USERPROFILE ||
      (env.HOMEPATH ? ((env.HOMEDRIVE || 'C:/') + env.HOMEPATH) : null);

    if (home) {
      return home;
    }

    throw AWS.util.error(
      new Error('Cannot load credentials, HOME path not set')
    );
  },

  getProfile: function loadProfile(profile) {
    this.ensureFileLoaded();

    var profileIndex = profile !== AWS.util.defaultProfile && this.isConfig ?
      'profile ' + profile : profile;

    return this.parsedContents[profileIndex];
  }
});
