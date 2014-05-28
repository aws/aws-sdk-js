var util = require('../util');
var Shape = require('../model/shape');

function DomXmlParser() { }

DomXmlParser.prototype.parse = function(xml, shape) {
  if (xml.replace(/^\s+/, '') === '') return {};

  var result, error;
  try {
    if (window.DOMParser) {
      var parser = new DOMParser();
      result = parser.parseFromString(xml, 'text/xml');

      if (result.documentElement === null) {
        throw new Error('Cannot parse empty document.');
      }

      var isError = result.getElementsByTagName('parsererror')[0];
      if (isError && (isError.parentNode === result ||
          isError.parentNode.nodeName === 'body')) {
        throw new Error(isError.getElementsByTagName('div')[0].textContent);
      }
    } else if (window.ActiveXObject) {
      result = new window.ActiveXObject('Microsoft.XMLDOM');
      result.async = false;

      if (!result.loadXML(xml)) {
        throw new Error('Parse error in document');
      }
    } else {
      throw new Error('Cannot load XML parser');
    }
  } catch (e) {
    error = e;
  }

  if (result && result.documentElement && !error) {
    var data = parseStructure(result.documentElement, shape);
    var metadata = result.getElementsByTagName('ResponseMetadata')[0];
    if (metadata) {
      data.ResponseMetadata = parseXml(metadata, {});
    }
    return data;
  } else if (error) {
    throw util.error(error || new Error(), {code: 'XMLParserError'});
  } else { // empty xml document
    return {};
  }
};

function parseXml(xml, shape) {
  switch(shape.type) {
    case 'structure': return parseStructure(xml, shape);
    case 'map': return parseMap(xml, shape);
    case 'list': return parseList(xml, shape);
    default: return parseScalar(xml, shape);
  }
}

function parseStructure(xml, shape) {
  var data = {};
  if (xml === null) return data;

  for (var j = 0; j < xml.attributes.length; j++) {
    var attr = xml.attributes[j];
    var attrRule = shape.members[attr.name];
    if (attrRule) {
      var value = parseXml({ textContent: attr.value }, attrRule);
      data[attrRule.name] = value;
    }
  }

  util.each(shape.members, function(memberName, memberShape) {
    var xmlChild = memberShape.flattened ? xml :
      xml.getElementsByTagName(memberShape.name)[0];
    if (xmlChild) {
      data[memberName] = parseXml(xmlChild, memberShape);
    } else if (!memberShape.flattened && memberShape.type === 'list') {
      data[memberName] = memberShape.defaultValue;
    }
  });

  return data;
}

function parseMap(xml, shape) {
  var data = {};
  var xmlKey = shape.key.name || 'key';
  var xmlValue = shape.value.name || 'value';
  var tagName = shape.flattened ? shape.name : 'entry';

  var child = xml.firstElementChild;
  while (child) {
    if (child.nodeName === tagName) {
      var key = child.getElementsByTagName(xmlKey)[0].textContent;
      var value = child.getElementsByTagName(xmlValue)[0];
      data[key] = parseXml(value, shape.value);
    }
    child = child.nextElementSibling;
  }
  return data;
}

function parseList(xml, shape) {
  var data = [];
  var tagName = shape.flattened ? shape.name : (shape.member.name || 'member');

  var child = xml.firstElementChild;
  while (child) {
    if (child.nodeName === tagName) {
      data.push(parseXml(child, shape.member));
    }
    child = child.nextElementSibling;
  }
  return data;
}

function parseScalar(xml, shape) {
  var encoding = xml.getAttribute('encoding');
  if (encoding === 'base64') {
    shape = new Shape.create({type: encoding});
  }

  var text = xml.textContent;
  if (text === '') text = null;
  if (typeof shape.toType === 'function') {
    return shape.toType(text);
  } else {
    return text;
  }
}

module.exports = DomXmlParser;
