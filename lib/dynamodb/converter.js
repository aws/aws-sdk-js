var util = require('../core').util;
var typeOf = require('./types').typeOf;
var DynamoDBSet = require('./set');

function convertInput(data) {
  if (typeOf(data) === 'Object') {
    var map = {M: {}};
    for (var key in data) {
      map['M'][key] = convertInput(data[key]);
    }
    return map;
  } else if (typeOf(data) === 'Array') {
    var list = {L: []};
    for (var i = 0, len = data.length; i < len; i++) {
      list['L'].push(convertInput(data[i]));
    }
    return list;
  } else if (typeOf(data) === 'Set') {
    return formatSet(data);
  } else if (typeOf(data) === 'String') {
    return { 'S': data };
  } else if (typeOf(data) === 'Number') {
    return { 'N': data.toString() };
  } else if (typeOf(data) === 'Binary') {
    return { 'B': data };
  } else if (typeOf(data) === 'Boolean') {
    return {'BOOL': data};
  } else if (typeOf(data) === 'null') {
    return {'NULL': true};
  }
}

function formatSet(data) {
  var map = {};
  switch (data.type) {
    case 'String': map['SS'] = data.values; break;
    case 'Binary': map['BS'] = data.values; break;
    case 'Number': map['NS'] = data.values.map(function (value) {
      return value.toString();
    });
  }
  return map;
}

function convertOutput(data) {
  var list = [], map = {},
      i, len, values;

  for (var type in data) {
    values = data[type];
    len = values.length;

    if (type === 'M') {
      for (var key in values) {
        map[key] = convertOutput(values[key]);
      }
      return map;
    } else if (type === 'L') {
      for (i = 0; i < len; i++) {
        list.push(convertOutput(values[i]));
      }
      return list;
    } else if (type === 'SS') {
      for (i = 0; i < len; i++) {
        list.push(values[i] + '');
      }
      return new DynamoDBSet(list);
    } else if (type === 'NS') {
      for (i = 0; i < len; i++) {
        list.push(Number(values[i]));
      }
      return new DynamoDBSet(list);
    } else if (type === 'BS') {
      for (i = 0; i < len; i++) {
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
