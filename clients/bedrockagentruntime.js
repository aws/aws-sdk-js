require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['bedrockagentruntime'] = {};
AWS.BedrockAgentRuntime = Service.defineService('bedrockagentruntime', ['2023-07-26']);
Object.defineProperty(apiLoader.services['bedrockagentruntime'], '2023-07-26', {
  get: function get() {
    var model = require('../apis/bedrock-agent-runtime-2023-07-26.min.json');
    model.paginators = require('../apis/bedrock-agent-runtime-2023-07-26.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.BedrockAgentRuntime;
