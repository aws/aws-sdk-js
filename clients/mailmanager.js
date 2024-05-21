require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['mailmanager'] = {};
AWS.MailManager = Service.defineService('mailmanager', ['2023-10-17']);
Object.defineProperty(apiLoader.services['mailmanager'], '2023-10-17', {
  get: function get() {
    var model = require('../apis/mailmanager-2023-10-17.min.json');
    model.paginators = require('../apis/mailmanager-2023-10-17.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.MailManager;
