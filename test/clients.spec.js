var AWS = require('../index');
var metadata = require('../apis/metadata');
var apiLoader = require('../lib/api_loader');
var customConstructorArgs = {
  CloudSearchDomain: {endpoint: 'http://localhost:1337'},
  IotData: {endpoint: 'http://localhost:1337'}
};

for (var serviceAbbreviation in metadata) {
  var clientName = metadata[serviceAbbreviation].name;
  describe(
    'Instantiating AWS.' + clientName + ' clients',
    (function(clientName, serviceAbbreviation) {
      return function() {
        for (var version in apiLoader.services[serviceAbbreviation]) {
          it(
            'can instantiate AWS.' + clientName + ' clients with version ' + version,
            (function (clientName, version) {
              return function () {
                var params = customConstructorArgs[clientName] || {};
                params.version = version;
                var c = new AWS[clientName](params);
              };
            })(clientName, version)
          );
        }
      };
    })(clientName, serviceAbbreviation)
  );
}
