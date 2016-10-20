import {Config} from './lib/core';

export * from './lib/core';
export * from './clients/all';
export var config = new Config()

export as namespace AWS;