/**
 * Copyright 2011-2012 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

module.exports = {

  /**
   * Call this function with a block that will be executed multiple times
   * to deal with eventually consistent conditions.
   *
   *   this.When(/^I something is eventually consistent$/, function(next) {
   *     this.eventually(function(retry) {
   *       doSomething(function(response) {
   *         if (response != notWhatIExpect) {
   *           retry();
   *         } else {
   *           next();
   *         }
   *       });
   *     });
   *   });
   *
   * You can pass in a few options after the function:
   *
   *   delay: The number of milliseconds to delay before retrying.
   *   backoff: Add this number of milliseconds to the delay between each attempt.
   *   maxTime: Maximum duration of milliseconds to wait for success.
   */
  eventually: function eventually(next, block, options) {

    if (!options) options = {};
    if (!options.delay) options.delay = 0;
    if (!options.backoff) options.backoff = 500;
    if (!options.maxTime) options.maxTime = 5 * 1000;

    var delay = options.delay;
    var started = this.AWS.util.date.getDate();

    var self = this;
    var retry = function() {

      var now = self.AWS.util.date.getDate();
      if (now - started < options.maxTime) {
        setTimeout(function () {
          delay += options.backoff;
          block.call(self, retry);
        }, delay);
      } else {
        next.fail();
      }

    };

    block.call(this, retry);

  },

  /**
   * A short-cut for calling a service operation and waiting for it to
   * finish execution before moving onto the next step in the scenario.
   */
  request: function request(svc, operation, params, next) {
    this[svc][operation](params).always(function (resp) {
      if (resp.error) {
        this.unexpectedError(resp, next);
      } else {
        this.resp = resp;
        next();
      }
    }, { bind: this });
  },

  /**
   * Given a response that contains an error, this fails the current
   * step with a formatted error message that indicates which service and
   * operation failed.
   */
  unexpectedError: function unexpectedError(resp, next) {
    var svc = resp.service.serviceName;
    var op = resp.method;
    var code = resp.error.code;
    var msg = resp.error.message;
    var err = 'Received unexpected error from ' + svc + '.' + op + ', ' + code + ': ' + msg;
    next.fail(err);
  }

};
