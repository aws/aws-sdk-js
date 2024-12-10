module.exports = {

  assert: require('./assertions').assert,

  uniqueName: function uniqueName(base, sep) {
    if (sep === undefined) sep = '-';
    if (base === '') return '';
    return base + sep + new Date().getTime();
  },

  /**
   * Call this function with a block that will be executed multiple times
   * to deal with eventually consistent conditions.
   *
   *   this.When(/^I something is eventually consistent$/, function(callback) {
   *     this.eventually(callback, function(next) {
   *       doSomething(function(response) {
   *         if (response != notWhatIExpect) {
   *           next.fail();
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
  eventually: function eventually(callback, block, options) {

    if (!options) options = {};
    if (!options.delay) options.delay = 0;
    if (!options.backoff) options.backoff = 500;
    if (!options.maxTime) options.maxTime = 5;

    var delay = options.delay;
    var started = this.AWS.util.date.getDate();

    var self = this;
    var retry = function() { callback(); };
    retry.fail = function(err) {
      var now = self.AWS.util.date.getDate();
      if (now - started < options.maxTime * 1000) {
        setTimeout(function () {
          delay += options.backoff;
          block.call(self, retry);
        }, delay);
      } else {
        callback.fail(err || new Error('Eventually block timed out'));
      }
    };

    block.call(this, retry);

  },

  /**
   * A short-cut for calling a service operation and waiting for it to
   * finish execution before moving onto the next step in the scenario.
   */
  request: function request(svc, operation, params, next, extra) {
    var world = this;

    if (!svc) svc = this.service;
    if (typeof svc === 'string') svc = this[svc];

    svc[operation](params, function(err, data) {
      world.response = this;
      world.error = err;
      world.data = data;

      try {
        if (typeof next.condition === 'function') {
          var condition = next.condition.call(world, world);
          if (!condition) {
            next.fail(new Error('Request success condition failed'));
            return;
          }
        }

        if (extra) {
          extra.call(world, world.response);
          next.call(world);
        }
        else if (extra !== false && err) {
          world.unexpectedError(world.response, next);
        } else {
          next.call(world);
        }
      } catch (err) {
        next.fail(err);
      }
    });
  },

  /**
   * Given a response that contains an error, this fails the current
   * step with a formatted error message that indicates which service and
   * operation failed.
   */
  unexpectedError: function unexpectedError(resp, next) {
    var svc = resp.request.service.api.serviceName;
    var op = resp.request.operation;
    var code = resp.error.code;
    var msg = resp.error.message;
    var err = 'Received unexpected error from ' + svc + '.' + op + ', ' + code + ': ' + msg;
    next.fail(new Error(err));
  },

  /**
   * Cache bucket names used for cleanup after all features have run.
   */
  cacheBucketName: function(bucket) {
    var fs = require('fs');
    var path = require('path');
    var filePath = path.resolve('integ.buckets.json');
    var cache;
    if (fs.existsSync(filePath)) {
      try {
        cache = JSON.parse(fs.readFileSync(filePath));
        cache.buckets.push(bucket);
        fs.writeFileSync(filePath, JSON.stringify(cache));
      } catch (fileErr) {
        throw fileErr;
      }
    } else {
      cache = {};
      cache.buckets = [bucket];
      fs.writeFileSync(filePath, JSON.stringify(cache));
    }
  },

  /**
   * Creates a fixture file of given size and returns the path.
   */
  createFile: function(size, name) {
    var fs = require('fs');
    var path = require('path');
    name = this.uniqueName(name);
    // Cannot set this as a world property because the world
    // is cleaned up before the AfterFeatures hook is fired.
    var fixturePath = path.resolve('./features/extra/fixtures/tmp');
    if (!fs.existsSync(fixturePath)) fs.mkdirSync(fixturePath);
    var filename = path.join(fixturePath, name);
    var body;
    if (typeof size === 'string') {
      switch (size) {
        case 'empty': body = Buffer.alloc(0); break;
        case 'small': body = Buffer.alloc(1024 * 1024); break;
        case 'large': body = Buffer.alloc(1024 * 1024 * 20); break;
      }
    } else if (typeof size === 'number') {
      body = Buffer.alloc(size);
    }

    fs.writeFileSync(filename, body);
    return filename;
  },

  /**
   * Creates and returns a buffer of given size
   */
  createBuffer: function(size) {
    var match;
    var buffer;
    if (match = size.match(/(\d+)KB/)) {
      buffer = Buffer.alloc(parseInt(match[1]) * 1024);
    } else if (match = size.match(/(\d+)MB/)) {
      buffer = Buffer.alloc(parseInt(match[1]) * 1024 * 1024);
    } else {
      switch (size) {
        case 'empty': buffer = Buffer.alloc(0); break;
        case 'small': buffer = Buffer.alloc(1024 * 1024); break;
        case 'large': buffer = Buffer.alloc(1024 * 1024 * 20); break;
        default: return Buffer.alloc(1024 * 1024);
      }
    }
    buffer.fill('x');
    return buffer;
  }

};
