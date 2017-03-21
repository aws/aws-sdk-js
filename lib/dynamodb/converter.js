var AWS = require('../core');
var util = AWS.util;
var typeOf = require('./types').typeOf;
var DynamoDBSet = require('./set');

/**
 * Convert a JavaScript value to its equivalent DynamoDB AttributeValue type
 *
 * @param data [any] The data to convert to a DynamoDB AttributeValue
 * @param options [map]
 * @option options convertEmptyValues [Boolean] Whether to automatically convert
 *                                              empty strings, blobs, and sets
 *                                              to `null`
 * @returns [AWS.DynamoDB.AttributeValue]
 */
function convertInput(data, options) {
  options = options || {};
  var type = typeOf(data);
  if (type === 'Object') {
    return formatMap(data, options);
  } else if (type === 'Array') {
    return formatList(data, options);
  } else if (type === 'Set') {
    return formatSet(data, options);
  } else if (type === 'String') {
    if (data.length === 0 && options.convertEmptyValues) {
      return convertInput(null);
    }
    return { S: data };
  } else if (type === 'Number') {
    return { N: data.toString() };
  } else if (type === 'Binary') {
    if (data.length === 0 && options.convertEmptyValues) {
      return convertInput(null);
    }
    return { B: data };
  } else if (type === 'Boolean') {
    return { BOOL: data };
  } else if (type === 'null') {
    return { NULL: true };
  } else if (type !== 'undefined' && type !== 'Function') {
    // this value has a custom constructor
    return formatMap(data, options);
  }
}

/**
 * @api private
 * @param data [Array]
 * @param options [map]
 */
function formatList(data, options) {
  var list = {L: []};
  for (var i = 0; i < data.length; i++) {
    list['L'].push(convertInput(data[i], options));
  }
  return list;
}

/**
 * @api private
 * @param data [map]
 * @param options [map]
 */
function formatMap(data, options) {
  var map = {M: {}};
  for (var key in data) {
    var formatted = convertInput(data[key], options);
    if (formatted !== void 0) {
      map['M'][key] = formatted;
    }
  }
  return map;
}

/**
 * @api private
 */
function formatSet(data, options) {
  options = options || {};
  var values = data.values;
  if (options.convertEmptyValues) {
    values = filterEmptySetValues(data);
    if (values.length === 0) {
      return convertInput(null);
    }
  }

  var map = {};
  switch (data.type) {
    case 'String': map['SS'] = values; break;
    case 'Binary': map['BS'] = values; break;
    case 'Number': map['NS'] = values.map(function (value) {
      return value.toString();
    });
  }
  return map;
}

/**
 * @api private
 */
function filterEmptySetValues(set) {
    var nonEmptyValues = [];
    var potentiallyEmptyTypes = {
        String: true,
        Binary: true,
        Number: false
    };
    if (potentiallyEmptyTypes[set.type]) {
        for (var i = 0; i < set.values.length; i++) {
            if (set.values[i].length === 0) {
                continue;
            }
            nonEmptyValues.push(set.values[i]);
        }

        return nonEmptyValues;
    }

    return set.values;
}

/**
 * Convert a DynamoDB AttributeValue object to its equivalent JavaScript type.
 *
 * @param data [AWS.DynamoDB.AttributeValue]
 * @returns [Object|Array|String|Number|Boolean|null]
 */
function convertOutput(data) {
  var list, map, i;
  for (var type in data) {
    var values = data[type];
    if (type === 'M') {
      map = {};
      for (var key in values) {
        map[key] = convertOutput(values[key]);
      }
      return map;
    } else if (type === 'L') {
      list = [];
      for (i = 0; i < values.length; i++) {
        list.push(convertOutput(values[i]));
      }
      return list;
    } else if (type === 'SS') {
      list = [];
      for (i = 0; i < values.length; i++) {
        list.push(values[i] + '');
      }
      return new DynamoDBSet(list);
    } else if (type === 'NS') {
      list = [];
      for (i = 0; i < values.length; i++) {
        list.push(Number(values[i]));
      }
      return new DynamoDBSet(list);
    } else if (type === 'BS') {
      list = [];
      for (i = 0; i < values.length; i++) {
        list.push(new util.Buffer(values[i]));
      }
      return new DynamoDBSet(list);
    } else if (type === 'S') {
      return values + '';
    } else if (type === 'N') {
      return Number(values);
    } else if (type === 'B') {
      return new util.Buffer(values);
    } else if (type === 'BOOL') {
      return (values === 'true' || values === 'TRUE' || values === true);
    } else if (type === 'NULL') {
      return null;
    }
  }
}

AWS.DynamoDB.Converter = {
  input: convertInput,
  output: convertOutput
};

module.exports = AWS.DynamoDB.Converter;
