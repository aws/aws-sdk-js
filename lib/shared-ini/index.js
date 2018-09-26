var SharedIniFile = require('./shared_ini');
/**
 * Singleton object to load specified config/credentials files.
 * It will cache all the files ever loaded;
 */
module.exports = new SharedIniFile();