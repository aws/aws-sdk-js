import * as CORE from './lib/core';
import * as SERVICES from './clients/all';
export = Object.assign({
    config: new CORE.Config()
}, CORE, SERVICES);