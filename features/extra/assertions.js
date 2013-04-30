/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You
 * may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */

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
