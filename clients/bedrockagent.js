require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['bedrockagent'] = {};
AWS.BedrockAgent = Service.defineService('bedrockagent', ['2023-06-05']);
Object.defineProperty(apiLoader.services['bedrockagent'], '2023-06-05', {
  get: function get() {
    var model = require('../apis/bedrock-agent-2023-06-05.min.json');
    model.paginators = require('../apis/bedrock-agent-2023-06-05.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.BedrockAgent;
