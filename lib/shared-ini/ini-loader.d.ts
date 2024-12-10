export interface LoadFileOptions {
  filename?: string,
  isConfig?: boolean,
}

export interface IniFileContent {
  [key: string]: {[key: string]: string}
}

/**
 * Ini file loader class the same as that used in the SDK. It loads and 
 * parses config and credentials files in .ini format and cache the content
 * to assure files are only read once. 
 * Note that calling operations on the instance instantiated from this class
 * won't affect the behavior of SDK since SDK uses an internal singleton of
 * this class.
 */
export class IniLoader{
  
/** Remove all cached files. Used after config files are updated. */
  clearCachedFiles():void;

/**
 * Load configurations from config/credentials files and cache them 
 * for later use. If no file is specified it will try to load default
 * files.
 * @returns {Record<string, string>} object of all profile information in the file
 */
  loadFrom(options: LoadFileOptions): IniFileContent;

  /**
 * Load sso sessions from config/credentials files and cache them 
 * for later use. If no file is specified it will try to load default
 * files.
 * @returns {Record<string, string>} object of all sso sessions information in the file
 */
  loadSsoSessionsFrom(options: LoadFileOptions): IniFileContent;

  /**
   * Get default file path for config/credentials files.
   * 
   * @param isConfig whether the file is a config file or a credentials file
   * @returns {string} default file path
   */
  getDefaultFilePath(isConfig: boolean): string;

  /**
   * Get Home directory of the current user.
   * 
   * @returns {string} home directory path
   * */
   getHomeDir(): string;
}