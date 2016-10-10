var path = require('path');
var TSGenerator = require('./lib/ts-generator');


var tsGenerator = new TSGenerator({
    SdkRootDirectory: path.join(__dirname, '..')
});

tsGenerator.generateAllClientTypings();
tsGenerator.generateGroupedClients();
tsGenerator.generateDocumentClientInterfaces();
console.log('TypeScript Definitions created.');


