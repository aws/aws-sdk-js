var util = require('../util');

function PropertyInitializer()

function Initializer(context, object, initFn) {
  var dumpMap = {};
  util.each(object, function(key, value) {
    var fn = propertyMap[key];
    if (!fn) throw new Error('Unsupported model property: ' + key);
    var result = fn.call(context, value);
    if (result) dumpMap[key] = result;
  });
  context.dump = function() { return dumpMap; };
}

module.exports = Initializer;
