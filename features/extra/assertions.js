var assert = require('assert');

assert.match = function assertMatches(string, matcher, message) {
  assert.ok(string.match(matcher), message ||
    'Expected ' + string + ' to match ' + matcher);
};

assert.contains = function assertContains(list, matcher, message) {
  var found = false;
  for (var i in list) {
    if (!list.hasOwnProperty(i)) continue;
    if (typeof matcher === 'function') {
      found = matcher(list[i]);
    } else {
      found = (list[i] === matcher);
    }
    if (found) return;
  }
  assert.fail(list, matcher, message, 'does not contain');
};

assert.compare = function assertComparison(actual, operator, expected, message) {
  var compare = actual + ' ' + operator + ' ' + expected;
  assert.ok(eval(compare), message || compare);
}

module.exports = {
  assert: assert
};
