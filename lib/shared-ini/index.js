var IniLoader = require('./ini-loader');
/**
 * Singleton object to load specified config/credentials files.
 * It will cache all the files ever loaded;
 */
module.exports = new IniLoader();