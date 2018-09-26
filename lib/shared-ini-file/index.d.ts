export interface LoadFileOptions {
  filename?: string,
  isConfig?: boolean,
}

export interface IniFileContent {
  [key: string]: {[key: string]: string}
}

export function loadFrom(options: LoadFileOptions): IniFileContent;

export function clearCachedFiles(): void;