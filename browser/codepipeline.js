require('../lib/browser_loader');
var AWS = require('../lib/core');

AWS.apiLoader.services['codepipeline'] = {};
AWS.CodePipeline = AWS.Service.defineService('codepipeline', ['2015-07-09']);

AWS.apiLoader.services['codepipeline']['2015-07-09'] = require('../apis/codepipeline-2015-07-09.min');

module.exports = AWS.CodePipeline;
