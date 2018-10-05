export interface LoadFileOptions {
  filename?: string,
  isConfig?: boolean,
}

export interface IniFileContent {
  [key: string]: {[key: string]: string}
}

/**
 * Load configurations from config/credentials files and cache them 
 * for later use. If no file is specified it will try to load default
 * files.
 * @returns {object} object of all profile information in the file
 */
export function loadFrom(options: LoadFileOptions): IniFileContent;

/**
 * Read specified file and return parsed config object. This method will always
 * read from disk and won't update cache. This is a lower level function of 
 * loadFrom().
 * @param filename [string] valid readable file path containing aws credentials
 * or aws configs
 * @param isConfig [boolean] true if specified file is an aws config file; false
 * if the file is an aws credentials file
 */
export function parseFile(filename: string, isConfig: boolean): IniFileContent;

/** Remove all cached files. Used after config files are updated. */
export function clearCachedFiles(): void;