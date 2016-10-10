import * as AWS from './lib/core';

export = Object.assign({
    config: new AWS.Config()
}, AWS);