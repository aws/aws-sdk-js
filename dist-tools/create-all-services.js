#!/usr/bin/env node

var ClientCreator = require('./client-creator');

var cc = new ClientCreator(process.argv[2] || path.join(__dirname, '..'));

cc.writeClientServices();
console.log('Finished updating services.');
