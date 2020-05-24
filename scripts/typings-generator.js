#!/usr/bin/env node

var path = require('path');
var TSGenerator = require('./lib/ts-generator');

var basePath = process.argv[2] || path.join(__dirname, '..');

var tsGenerator = new TSGenerator({
    SdkRootDirectory: basePath
});

tsGenerator.generateAllClientTypings();
tsGenerator.generateGroupedClients();
tsGenerator.updateDynamoDBDocumentClient();
tsGenerator.generateConfigurationServicePlaceholders();
console.log('TypeScript Definitions created.');
