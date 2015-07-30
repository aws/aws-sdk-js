var types = require('./data_types');


var DynamoDBCondition = function(key, operator, args) {
  this.key = key;
  this.operator = operator;
  this.args = args;

  this.format = function() {
    var formatted = {};
    var attrValueList = [];

    for (var i = 0; i < this.args.length; i++) {
      if (this.args[i] !== undefined) {
        attrValueList.push(types.formatDataType(this.args[i]));
      }
    }
    if (attrValueList.length > 0) {
      formatted.AttributeValueList = attrValueList;
    }
    formatted.ComparisonOperator = this.operator;

    return formatted;
  };
};

function createCondition() {
  return new DynamoDBCondition(
    arguments[0], arguments[1], Array.prototype.slice.call(arguments, 2));
}

module.exports = {
  createCondition: createCondition,
  DynamoDBCondition: DynamoDBCondition
};


