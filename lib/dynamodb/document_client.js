var AWS = require('../core');
var Translator = require('./translator');
var DynamoDBSet = require('./set');

/**
 * Amazon DynamoDB Document Client abstracts away the notion of Attribute Values
 * from the {AWS.DynamoDB} client.
 * What this means for the developer is that you are able able to pass in JSON
 * documents without annotating each value.
 *
 * ## Type Inference Through Javascript Natives
 * 
 * The document client affords developers use of Javascript natives types as
 * "AttributeValues" to simplify their development experience with DynamoDB.
 * That is these Javascript objects are marshalled and unmarshalled directly
 * to requests and from responses.  Structurally these requests and responses
 * remain the same as the low level client, however, AttributeValues will no
 * longer be accepted, in favor of Javascript natives.
 *
 *  |Javascript|  DynamoDB  |
 *  |:--------:|:----------:|
 *  |string    |     S      |
 *  |number    |     N      |
 *  |boolean   |     BOOL   |
 *  |null      |     NULL   |
 *  |array     |     L      |
 *  |object    |     M      |
 *
 * ## Differentiating Between Sets
 *
 * The Document Client offers you a convenience method to {AWS.DynamoDB.DocumentClient.createSet}
 * from JavaScript arrays. The type of set is inferred from the first element in the
 * array. DynamoDB supports String, Number, and Binary sets. See the
 * [DynamoDB Data Model Documentation](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DataModel.html)
 * for information about sets.
 */
AWS.DynamoDB.DocumentClient = AWS.util.inherit({

  /**
   * Creates a DynamoDB document client with a set of configuration options.
   *
   * @option options params [map] An optional map of parameters to bind to every
   *   request sent by this service object.
   * @option options service [AWS.DynamoDB] An optional pre configured DynamoDB
   *   object whose configs are inherited (i.e. parameter bindings).
   * @see AWS.DynamoDB.constructor
   *
   */
  constructor: function DocumentClient(options) {
    var self = this;
    self.options = options || {};
    self.configure(self.options);
  },

  /**
   * @api private
   */
  configure: function configure(options) {
    var self = this;
    self.service = options.service;
    self.bindServiceObject(options.params);
    self.attrValue =
      self.service.api.operations.putItem.input.members.Item.value.shape;
  },

  /**
   * @api private
   */
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

  /**
   * Retrieves multiple items from multiple tables in a single request
   *   by invoking the batchGetItem api.
   * 
   * Requires the same parameters as the {AWS.DynamoDB.batchGetItem} but 
   *   can use simplified AttributeValues in the Keys.
   *
   * @return {AWS.Request}
   * @see AWS.DynamoDB.batchGetItem
   * @example Get items from multiple tables
   *   var params = {
   *     RequestItems: {
   *       Table1: {
   *         Keys: [
   *          { HashKey: "key1",
   *            NumberRangeKey: 1 }
   *         ]
   *       }, 
   *       Table2: {
   *         Keys: [
   *          { someKey: "key" },
   *         ]
   *       }
   *     }
   *   };
   *
   *   docClient.batchGet(params, function(err, data) {
   *      if (err) console.log("Error:", err.code, err.message);
   *      else console.log(data);
   *   });
   */
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

   /**
    * Writes multiple items to multiple tables in a single request
    *   by invoking the batchWriteItem api.
    *  
    * Requires the same parameters as the {AWS.DynamoDB.batchWriteItem}
    *   but can use simplified AttributeValues in the Item or Keys
    * 
   * @return {AWS.Request}
    * @see AWS.DynamoDB.batchWriteItem
    * @example Write to and delete from a Table 
    *   var params = {
    *     RequestItems: {
    *       Table1: [
    *         {
    *            DeleteRequest: {
    *              Key: { HashKey: "key" }
    *            }
    *         },
    *         {
    *             PutRequest: {
    *              Item: {
    *                  HashKey: "anotherKey",
    *                  NumAttribute: 21,
    *                  BoolAttribute: true,
    *                  ListAttribute: [1, "two", false],
    *                  MapAttribute: {My: "Map"}
    *              }
    *             }
    *         }
    *       ]
    *     }
    *   };
    *   
    *   docClient.batchWrite(params, function(err, data) {
    *      if (err) console.log("Error:", err.code, err.message);
    *      else console.log(data);
    *   });
    */
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

  /**
    * Removes an item from the table.
    * Requires the same parameters as the {AWS.DynamoDB.deleteItem}
    *   but can use simplified AttributeValues.
    *
    * @return {AWS.Request}
    * @see AWS.DynamoDB.deleteItem
    * @example Delete item from table
    *  var params = {
    *    TableName = "Table",
    *    Key: {
    *      HashKey: "key",
    *      NumberRangeKey: 1
    *    }
    *  };
    *
    *  docClient.delete(params, function(err, data) {
    *     if (err) console.log("Error:", err.code, err.message);
    *     else console.log(data);
    *  });
    */
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

  /**
    * Retrieve an item from the table.
    * Requires the same parameters as the {AWS.DynamoDB.getItem}
    *   but can use simplified AttributeValues.
    *
    * @return {AWS.Request}
    * @see AWS.DynamoDB.getItem
    * @example Get item from table
    *  var params = {
    *    TableName = "Table",
    *    Key: {
    *        HashKey: "key"
    *    }
    *  };
    * 
    *  docClient.get(params, function(err, data) {
    *     if (err) console.log("Error:", err.code, err.message);
    *     else console.log(data);
    *  });
    */
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

  /**
    * Insert an item into the table.
    * Requires the same parameters as the {AWS.DynamoDB.putItem}
    *   but can use simplified AttributeValues
    *
    * @return {AWS.Request}
    * @see AWS.DynamoDB.putItem
    * @example Insert a JSON document as an item
    *  var params = {
    *    TableName = "Table",
    *    Item: {
    *        HashKey: "anotherKey",
    *        NumAttribute: 21,
    *        BoolAttribute: true,
    *        ListAttribute: [1, "two", false],
    *        MapAttribute: {My: "Map"},
    *        NullAttribute: null
    *    }
    *  }
    *
    *  docClient.put(params, function(err, data) {
    *     if (err) console.log("Error:", err.code, err.message);
    *     else console.log(data);
    *  });
    */
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

  /**
    * Update an item in the table.
    * Requires the same parameteres as the {AWS.DynamoDB.updateItem}
    *   but can use simplified AttributeValues
    *
    * @return {AWS.Request}
    * @see AWS.DynamoDB.updateItem
    * @example Update an item with Expressions
    *  var params = {
    *    TableName = "Table",
    *    Key = {HashKey : "Key"},
    * 
    *    UpdateExpression = "set #a = :x + :y",
    *    ConditionExpression = "#a < :MAX and Price = :correct",
    *    ExpressionAttributeNames = {"#a" : "Description"},
    *    ExpressionAttributeValues = {":x" : 20,
    *                                 ":y" : 45,
    *                                 ":MAX" : 100,
    *                                 ":correct" : "is right!!"}
    *  }; 
    *
    *  docClient.updateItem(params, function(err, data) {
    *     if (err) console.log("Error:", err.code, err.message);
    *     else console.log(data);
    *  });
    */
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

  /**
    * Search the entire table.
    * Requires the same parameters as the {AWS.DynamoDB.scan}
    *   but can use simplified AttributeValues
    *
    * @return {AWS.Request}
    * @see AWS.DynamoDB.scan
    * @example Scan the table with a FilterExpression
    *  var params = {
    *    TableName = "Table",
    *    FilterExpression = "Year = :this_year",
    *    ExpressionAttributeValues = {":this_year" = 2015}
    *  };
    * 
    *  docClient.scan(params, function(err, data) {
    *     if (err) console.log("Error:", err.code, err.message);
    *     else console.log(data);
    *  });
    */
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

   /**
    * Retrieve items in the table or index.
    * Requires the same parameters as the {AWS.DynamoDB.query}
    *   but can use simplified AttributeValues
    *
    * @return {AWS.Request}
    * @see AWS.DynamoDB.query
    * @example Query an index
    *  var params = {
    *    TableName = "Table",
    *    IndexName = "Index",
    *    KeyConditionExpression = "HashKey = :hkey and RangeKey > :rkey",
    *    ExpressionAttributeValues = {":hkey": "key", ":rkey": 2015} 
    *  };
    *
    *  docClient.query(params, function(err, data) {
    *     if (err) console.log("Error:", err.code, err.message);
    *     else console.log(data);
    *  });
    */
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

  /**
   * Creates a set of elements and infers type based on first element
   *   of the list that is passed in.
   * @note Should be treated as an DynamoDB AttributeValue
   * @param list [Array] Collection to represent your DynamoDB Set
   * @param options [map] Has "validate" flag to ensure all types
   *    in the collection are the same as the first element
   * @return {DynamoDBSet}
   * @example Creating and Validating new StrSet
   *    var strList = ["a", "b", "c"];
   *    var strSet = docClient.createSet(strset, {validate: true});
   *    params.Item.mySet = strSet;
   */
  createSet: function(list, options) {
    options = options || {};
    return new DynamoDBSet(list, options);
  },

  /**
   * @api private
   */
  getTranslator: function() {
    return new Translator({attrValue: this.attrValue});
  },

  /**
   * @api private
   */
  setupRequest: function(request, shape, translator) {
    request.on('extractData', function(response) {
      var output = translator.translateOutput(response.data, shape);
      response.data = output;
    });
  }

});

module.exports = AWS.DynamoDB.DocumentClient;
