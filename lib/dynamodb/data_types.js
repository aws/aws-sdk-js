var AWS = require('../core');

var Uint8ArrayError = 'Uint8Array can only be used for Binary in Browser.';
var ScalarDatatypeError = 'Unrecognized Scalar Datatype to be formatted.';
var GeneralDatatypeError = 'Unrecognized Datatype to be formatted.';
var BinConversionError = 'Need to pass in Buffer or Uint8Array.';
var StrConversionError = 'Need to pass in string primitive to be converted to binary.';

var DynamoDBSet = function(set, type) {
  this.datatype = type + 'S';
  this.contents = {};

  this.add = function(value) {
    if (this.datatype === 'SS' && typeof(value) === 'string') {
      this.contents[value] = value;
    } else if (this.datatype === 'NS' && typeof(value) === 'number') {
      this.contents[value] = value;
    } else if (this.datatype === 'BS' && value instanceof(AWS.util.Buffer)) {
      this.contents[binToStr(value)] = value;
    } else if (this.datatype === 'BS' && value instanceof(Uint8Array)) {
      if (AWS.util.isBrowser()) {
        this.contents[binToStr(value)] = value;
      } else {
        throw new Error(Uint8ArrayError);
      }
    } else {
      throw new Error('Inconsistent in this ' + type + ' Set');
    }
  };

  this.contains = function(content) {
    var value = content;
    if (content instanceof AWS.util.Buffer || content instanceof(Uint8Array)) {
      value = binToStr(content);
    }
    if (this.contents[value] === undefined) {
      return false;
    }
    return true;
  };

  this.remove = function(content) {
    var value = content;
    if (content instanceof AWS.util.Buffer || content instanceof(Uint8Array)) {
      value = binToStr(content);
    }
    delete this.contents[value];
  };

  this.toArray = function() {
    var keys = Object.keys(this.contents);
    var arr = [];

    for (var keyIndex in keys) {
      var key = keys[keyIndex];
      if (this.contents.hasOwnProperty(key)) {
        arr.push(this.contents[key]);
      }
    }

    return arr;
  };

  this.format = function() {
    var values = this.toArray();
    var result = {};
    result[this.datatype] = formatSetValues(this.datatype, values);
    return result;
  };

  if (set) {
    for (var index in set) {
      this.add(set[index]);
    }
  }
};

function isScalarType(data) {
  var type = typeof data;
  return type === 'number' ||
    type === 'string' ||
    type === 'boolean' ||
    (data instanceof(Uint8Array) && AWS.util.isBrowser()) ||
    data instanceof(AWS.util.Buffer) ||
    data === null;
}

function isSetType(data) {
  return data.datatype === 'SS' ||
    data.datatype === 'NS' ||
    data.datatype === 'BS';
}

function isRecursiveType(data) {
  return Array.isArray(data) ||
    typeof data === 'object';
}

function formatSetValues(type, values) {
  if (type === 'NS') {
    return values.map(function(value) {
      return value.toString();
    });
  } else {
    return values;
  }
}

function formatRecursiveType(data) {
  var recursiveDoc = {};
  var value, type;
  if (Array.isArray(data)) {
    value = [];
    type = 'L';
    for (var index = 0; index < data.length; index++) {
      value[index] = formatDataType(data[index]);
    }
  } else {
    value = {};
    type = 'M';
    for (var key in data) {
      value[key] = formatDataType(data[key]);
    }
  }
  recursiveDoc[type] = value;
  return recursiveDoc;
}

function formatScalarType(data) {
  if (data === null) {
    return { 'NULL': true };
  }
  var type = typeof data;

  if (type === 'string') {
    return { 'S': data };
  } else if (type === 'number') {
    return { 'N': String(data) };
  } else if (type === 'boolean') {
    return { 'BOOL': data };
  } else if (data instanceof AWS.util.Buffer) {
    return { 'B': data };
  } else if (data instanceof Uint8Array) {
    if (AWS.util.isBrowser()) {
      return { 'B': data };
    } else {
      throw new Error(Uint8ArrayError);
    }
  } else {
    throw new Error(ScalarDatatypeError);
  }
}

function formatDataType(data) {
  if (typeof data === 'undefined') {
    return undefined;
  } else if (isScalarType(data)) {
    return formatScalarType(data);
  } else if (isSetType(data)) {
    return data.format();
  } else if (isRecursiveType(data)) {
    return formatRecursiveType(data);
  } else {
    throw new Error(GeneralDatatypeError);
  }
}

function strToBin(value) {
  if (typeof value !== 'string') {
    throw new Error(StrConversionError);
  }
  if (AWS.util.isBrowser()) {
    var length = value.length;
    var blob = new Uint8Array(new ArrayBuffer(length));
    for (var i = 0; i < length; i++) {
      blob[i] = value.charCodeAt(i);
    }
    return blob;
  } else {
    return AWS.util.Buffer(value);
  }
}

function binToStr(value) {
  if (!(value instanceof AWS.util.Buffer) && !(value instanceof Uint8Array)) {
    throw new Error(BinConversionError);
  }

  if (AWS.util.isBrowser()) {
    return String.fromCharCode.apply(null, value);
  } else {
    return value.toString('utf-8').valueOf();
  }
}

function createSet(set, type) {
  if (type !== 'N' && type !== 'S' && type !== 'B') {
    throw new Error(type + ' is an invalid type for Set');
  }
  return new DynamoDBSet(set, type);
}

function formatWireType(key, value) {
  switch (key) {
    case 'S':
    case 'B':
    case 'BOOL':
      return value;
    case 'N':
      return Number(value);
    case 'NULL':
      return null;
    case 'L':
      for (var lIndex = 0; lIndex < value.length; lIndex++) {
      var lValue = value[lIndex];
      var lKey = Object.keys(lValue)[0];
      value[lIndex] = this.formatWireType(lKey, lValue[lKey]);
    }
    return value;
    case 'M':
      for (var mIndex in value) {
      var mValue = value[mIndex];
      var mKey = Object.keys(mValue)[0];
      value[mIndex] = this.formatWireType(mKey, mValue[mKey]);
    }
    return value;
    case 'SS':
      return createSet(value, 'S');
    case 'NS':
      value = value.map(function(each) { return Number(each); });
    return createSet(value, 'N');
    case 'BS':
      return createSet(value, 'B');
    default:
      throw 'Service returned unrecognized datatype ' + key;
  }
}

module.exports = {
  DynamoDBSet: DynamoDBSet,
  createSet: createSet,
  strToBin: strToBin,
  binToStr: binToStr,
  formatDataType: formatDataType,
  formatWireType: formatWireType
};
