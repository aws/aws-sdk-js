var AWS = require('../core');
var Translator = require('./translator');
var DynamoDBSet = require('./set');

AWS.DynamoDB.DocumentClient = AWS.util.inherit({

  constructor: function DocumentClient(options) {
    var self = this;
    self.options = options || {};
    self.configure(self.options);
  },

  configure: function configure(options) {
    var self = this;
    self.service = options.service;
    self.bindServiceObject(options.params);
    self.attrValue =
      self.service.api.operations.putItem.input.members.Item.value.shape;
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
  },

  // Performs a batchGetItem
  batchGet: function(input, callback) {
    var self = this;
    var translator = self.getTranslator();
    var inputShape = self.service.api.operations.batchGetItem.input;
    var outputShape = self.service.api.operations.batchGetItem.output;
    var params = translator.translateInput(input, inputShape);
    var request = self.service.batchGetItem(params);
    self.setupRequest(request, outputShape, translator);
    if (typeof callback === 'function') {
      request.send(callback);
    }
    return request;
  },

  // Performs a batchWriteItem
  batchPut: function(input, callback) {
    var self = this;
    var translator = self.getTranslator();
    var inputShape = self.service.api.operations.batchWriteItem.input;
    var outputShape = self.service.api.operations.batchWriteItem.output;
    var params = translator.translateInput(input, inputShape);
    var request = self.service.batchWriteItem(params);
    self.setupRequest(request, outputShape, translator);
    if (typeof callback === 'function') {
      request.send(callback);
    }
    return request;
  },

  // Performs a deleteItem
  delete: function(input, callback) {
    var self = this;
    var translator = self.getTranslator();
    var inputShape = self.service.api.operations.deleteItem.input;
    var outputShape = self.service.api.operations.deleteItem.output;
    var params = translator.translateInput(input, inputShape);
    var request = self.service.deleteItem(params);
    self.setupRequest(request, outputShape, translator);
    if (typeof callback === 'function') {
      request.send(callback);
    }
    return request;
  },

  // Performs a getItem
  get: function(input, callback) {
    var self = this;
    var translator = self.getTranslator();
    var inputShape = self.service.api.operations.getItem.input;
    var outputShape = self.service.api.operations.getItem.output;
    var params = translator.translateInput(input, inputShape);
    var request = self.service.getItem(params);
    self.setupRequest(request, outputShape, translator);
    if (typeof callback === 'function') {
      request.send(callback);
    }
    return request;
  },


  // Performs a putItem
  put: function(input, callback) {
    var self = this;
    var translator = self.getTranslator();
    var inputShape = self.service.api.operations.putItem.input;
    var outputShape = self.service.api.operations.putItem.output;
    var params = translator.translateInput(input, inputShape);
    var request = self.service.putItem(params);
    self.setupRequest(request, outputShape, translator);
    if (typeof callback === 'function') {
      request.send(callback);
    }
    return request;
  },

  // Performs an updateItem
  update: function(input, callback) {
    var self = this;
    var translator = self.getTranslator();
    var inputShape = self.service.api.operations.updateItem.input;
    var outputShape = self.service.api.operations.updateItem.output;
    var params = translator.translateInput(input, inputShape);
    var request = self.service.updateItem(params);
    self.setupRequest(request, outputShape, translator);
    if (typeof callback === 'function') {
      request.send(callback);
    }
    return request;
  },

  // Performs a scan
  scan: function(input, callback) {
    var self = this;
    var translator = self.getTranslator();
    var inputShape = self.service.api.operations.scan.input;
    var outputShape = self.service.api.operations.scan.output;
    var params = translator.translateInput(input, inputShape);
    var request = self.service.scan(params);
    self.setupRequest(request, outputShape, translator);
    if (typeof callback === 'function') {
      request.send(callback);
    }
    return request;
  },

  // Performs a query
  query: function(input, callback) {
    var self = this;
    var translator = self.getTranslator();
    var inputShape = self.service.api.operations.query.input;
    var outputShape = self.service.api.operations.query.output;
    var params = translator.translateInput(input, inputShape);
    var request = self.service.query(params);
    self.setupRequest(request, outputShape, translator);
    if (typeof callback === 'function') {
      request.send(callback);
    }
    return request;
  },

  createSet: function(list, options) {
    options = options || {};
    return new DynamoDBSet(list, options);
  },

  getTranslator: function() {
    return new Translator({attrValue: this.attrValue});
  },

  setupRequest: function(request, shape, translator) {
    request.on('extractData', function(response) {
      var output = translator.translateOutput(response.data, shape);
      response.data = output;
    });
  }

});

module.exports = AWS.DynamoDB.DocumentClient;
