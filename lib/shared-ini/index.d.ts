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

/** Remove all cached files. Used after config files are updated. */
export function clearCachedFiles(): void;