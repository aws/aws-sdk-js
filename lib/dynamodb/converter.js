var util = require('../core').util;
var typeOf = require('./types').typeOf;
var DynamoDBSet = require('./set');

function convertInput(data, options) {
  options = options || {};
  var type = typeOf(data);
  if (type === 'Object') {
    var map = {M: {}};
    for (var key in data) {
      map['M'][key] = convertInput(data[key], options);
    }
    return map;
  } else if (type === 'Array') {
    var list = {L: []};
    for (var i = 0; i < data.length; i++) {
      list['L'].push(convertInput(data[i], options));
    }
    return list;
  } else if (type === 'Set') {
    return formatSet(data, options);
  } else if (type === 'String') {
    if (data.length === 0 && options.convertEmptyValues) {
      return convertInput(null);
    }
    return { 'S': data };
  } else if (type === 'Number') {
    return { 'N': data.toString() };
  } else if (type === 'Binary') {
    if (data.length === 0 && options.convertEmptyValues) {
      return convertInput(null);
    }
    return { 'B': data };
  } else if (type === 'Boolean') {
    return {'BOOL': data};
  } else if (type === 'null') {
    return {'NULL': true};
  }
}

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

module.exports = {
  input: convertInput,
  output: convertOutput
};
