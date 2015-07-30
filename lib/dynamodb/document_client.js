var AWS = require('../core');
var condition = require('./condition');
var types = require('./data_types');
var formatter = require('./formatter');


AWS.DynamoDB.DocumentClient = AWS.util.inherit({

  constructor: function DocumentClient(options) {
    var self = this;
    self.options = options || {};
    self.configure(self.options);
    return self.service;
  },

  configure: function configure(options) {
    var self = this;
    self.service = options.service;
    self.bindServiceObject(options.params);
  },

  bindServiceObject: function bindServiceObject(params) {
    var self = this;
    params = params || {};

    if (!self.service) {
      self.service = new AWS.DynamoDB({params: params});
    } else {
      var config = AWS.util.copy(self.service.config);
      self.service = new self.service.constructor.__super__(config);
      self.service.config.params =
        AWS.util.merge(self.service.config.params || {}, params);
    }
    var setupDefaultListeners = self.service.setupRequestListeners;
    self.service.setupRequestListeners = function(request) {
      setupDefaultListeners.call(this, request);
      var paramValidator = AWS.EventListeners.Core.VALIDATE_PARAMETERS;
      request.removeListener('validate', paramValidator);
      request.on('validate', formatter.formatInput);
      request.on('validate', paramValidator);
      request.on('build', formatter.setCustomAgent);
      request.on('extractData', formatter.formatOutput);
    };
    AWS.util.update(self.service, self.constructor.prototype);
  },

  set: function createSet(list, type) {
    return types.createSet(list, type);
  },

  condition: function createCondition() {
    return condition.createCondition(arguments);
  },

  strToBin: function strToBin(value) {
    return types.strToBin(value);
  },

  binToStr: function binToStr(value) {
    return types.binToStr(value);
  }

});

module.exports = AWS.DynamoDB.DocumentClient;
