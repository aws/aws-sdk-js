var util = require('../util');

function QueryParamSerializer(protocol) {
  this.protocol = protocol;
}

QueryParamSerializer.prototype.serialize = function(params, shape, fn) {
  serializeStructure('', params, shape, fn, this.protocol);
};

function ucfirst(str) {
  return str[0].toUpperCase() + str.substr(1);
}

function serializeStructure(prefix, struct, rules, fn, protocol) {
  util.each(rules.members, function(name, member) {
    var value = struct[name];
    if (value === null || value === undefined) return;

    var memberName = protocol === 'ec2' ? ucfirst(member.name) : member.name;
    var memberName = prefix ? prefix + '.' + memberName : memberName;
    serializeMember(memberName, value, member, fn, protocol);
  });
}

function serializeMap(name, map, rules, fn, protocol) {
  var i = 1;
  util.each(map, function (key, value) {
    var prefix = rules.flattened ? '.' : '.entry.';
    var position = prefix + (i++) + '.';
    var keyName = position + (rules.key.name || 'key');
    var valueName = position + (rules.value.name || 'value');
    serializeMember(name + keyName, key, rules.key, fn, protocol);
    serializeMember(name + valueName, value, rules.value, fn, protocol);
  });
}

function serializeList(name, list, rules, fn, protocol) {
  var memberRules = rules.member || {};

  if (list.length === 0) {
    fn.call(this, name, null);
    return;
  }

  util.arrayEach(list, function (v, n) {
    var suffix = '.' + (n + 1);
    if (rules.flattened || protocol === 'ec2') {
      if (memberRules.name) {
        var parts = name.split('.');
        parts.pop();
        if (protocol === 'ec2') {
          parts.push(ucfirst(memberRules.name));
        } else {
          parts.push(memberRules.name);
        }
        name = parts.join('.');
      }
    } else {
      suffix = '.member' + suffix;
    }
    serializeMember(name + suffix, v, memberRules, fn, protocol);
  });
}

function serializeMember(name, value, rules, fn, protocol) {
  if (value === null || value === undefined) return;
  if (rules.type === 'structure') {
    serializeStructure(name, value, rules, fn, protocol);
  } else if (rules.type === 'list') {
    serializeList(name, value, rules, fn, protocol);
  } else if (rules.type === 'map') {
    serializeMap(name, value, rules, fn, protocol);
  } else {
    fn(name, rules.toWireFormat(value).toString());
  }
}

module.exports = QueryParamSerializer;
