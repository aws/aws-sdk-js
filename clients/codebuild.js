require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['codebuild'] = {};
AWS.CodeBuild = Service.defineService('codebuild', ['2016-10-06']);
Object.defineProperty(apiLoader.services['codebuild'], '2016-10-06', {
  get: function get() {
    var model = require('../apis/codebuild-2016-10-06.min.json');
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.CodeBuild;
