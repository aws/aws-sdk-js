require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['chatbot'] = {};
AWS.Chatbot = Service.defineService('chatbot', ['2017-10-11']);
Object.defineProperty(apiLoader.services['chatbot'], '2017-10-11', {
  get: function get() {
    var model = require('../apis/chatbot-2017-10-11.min.json');
    model.paginators = require('../apis/chatbot-2017-10-11.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Chatbot;
