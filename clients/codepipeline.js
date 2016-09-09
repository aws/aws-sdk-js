require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['codepipeline'] = {};
CodePipeline = Service.defineService('codepipeline', ['2015-07-09']);

apiLoader.services['codepipeline']['2015-07-09'] = require('../apis/codepipeline-2015-07-09.min.json');
if (!Object.prototype.hasOwnProperty.call(AWS, 'CodePipeline')) {
  AWS.CodePipeline = CodePipeline;
}

module.exports = CodePipeline;
