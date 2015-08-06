var util = require('../core').util;

function convertInput(data) {
  console.log(data);
  if (typeOf(data) === 'Object') {
    var map = {M: {}};
    for (var key in data) {
      map['M'][key] = convertInput(data[key]);
    }
    return map;
  } else if (typeOf(data) === 'Array') {
    if (isSet(data)) {
      return formatSet(data);
    } else {
      var list = {L: []};
      for (var i = 0; i < data.length; i++) {
        list['L'].push(convertInput(data[i]));
      }
    }
  } else if (typeOf(data) === 'String') {
    return { 'S': data };
  } else if (typeOf(data) === 'Number') {
    return { 'N': data.toString() };
  } else if (util.Buffer.isBuffer(data) || typeOf(data) === 'Uint8Array' ) {
    return { 'B': data };
  }
}

function formatSet() {

}

function convertOutput() {

}

function typeOf(data) {
  if (data !== undefined && data.constructor) {
    return data.constructor.name;
  } else {
    return 'undefined';
  }
}

function isSet(list) {
  var type = typeOf(list[0]);
  for (var i = 1; i < list.length; i++) {
    if (typeOf(list[i] !== type)) return false;
  }
  return true;
}

module.exports = {
  input: convertInput,
  output: convertOutput
};
