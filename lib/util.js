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

var AWS = require('./core');
var cryptoLib = require('crypto');

/**
 * A set of utility methods for use with the AWS SDK.
 *
 * @!attribute abort
 *   Return this value from an iterator function ({each} or {arrayEach})
 *   to break out of the iteration.
 *   @example Breaking out of an iterator function
 *     AWS.util.each({a: 1, b: 2, c: 3}, function(key, value) {
 *       if (key == 'b') return AWS.util.abort;
 *     });
 *   @see each
 *   @see arrayEach
 * @api private
 */
AWS.util = {

  engine: function enc() {
    return process.platform + '/' + process.version;
  },

  userAgent: function userAgent() {
    return 'aws-sdk-nodejs/' + AWS.VERSION + AWS.util.engine();
  },

  uriEscape: function uriEscape(string) {
    /*jshint undef:false */
    return encodeURIComponent(string).replace(/[^A-Za-z0-9_.~\-%]+/g, escape);
  },

  uriEscapePath: function uriEscapePath(string) {
    var parts = [];
    AWS.util.arrayEach(string.split('/'), function (part) {
      parts.push(AWS.util.uriEscape(part));
    });
    return parts.join('/');
  },

  urlParse: function urlParse(url) {
    return require('url').parse(url);
  },

  readFileSync: function readFileSync(path) {
    return require('fs').readFileSync(path, 'utf-8');
  },

  base64: {

    encode: function encode64(string) {
      return new Buffer(string).toString('base64');
    }

  },

  /**
   * Date and time utility functions.
   */
  date: {

    /**
     * @return [Date] the current JavaScript date object. Since all
     *   AWS services rely on this date object, you can override
     *   this function to provide a special time value to AWS service
     *   requests.
     */
    getDate: function getDate() { return new Date(); },

    /**
     * @return [String] the date in ISO-8601 format
     */
    iso8601: function iso8601(date) {
      if (date === undefined) { date = AWS.util.date.getDate(); }
      return date.toISOString();
    },

    /**
     * @return [String] the date in RFC 822 format
     */
    rfc822: function rfc822(date) {
      if (date === undefined) { date = AWS.util.date.getDate(); }
      return date.toUTCString();
    },

    /**
     * @return [Integer] the UNIX timestamp value for the current time
     */
    unixTimestamp: function unixTimestamp(date) {
      if (date === undefined) { date = AWS.util.date.getDate(); }
      return date.getTime() / 1000;
    }

  },

  crypto: {

    hmac: function hmac(key, string, digest, fn) {
      if (!digest) digest = 'binary';
      if (!fn) fn = 'sha256';
      return cryptoLib.createHmac(fn, key).update(string).digest(digest);
    },

    sha256: function sha256(string, digest) {
      if (!digest) { digest = 'binary'; }
      return cryptoLib.createHash('sha256').update(string).digest(digest);
    },

    toHex: function toHex(data) {
      var out = [];
      for (var i = 0; i < data.length; i++) {
        out.push(('0' + data.charCodeAt(i).toString(16)).substr(-2, 2));
      }
      return out.join('');
    }

  },

  /** @!ignore */

  /* Abort constant */
  abort: {},

  each: function each(object, iterFunction) {
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        var ret = iterFunction.call(this, key, object[key]);
        if (ret === AWS.util.abort) break;
      }
    }
  },

  arrayEach: function arrayEach(array, iterFunction) {
    /*jshint forin:false*/
    for (var idx in array) {
      var ret = iterFunction.call(this, array[idx], parseInt(idx, 10));
      if (ret === AWS.util.abort) break;
    }
  },

  update: function update(obj1, obj2) {
    AWS.util.each(obj2, function iterator(key, item) {
      obj1[key] = item;
    });
    return obj1;
  },

  merge: function merge(obj1, obj2) {
    return AWS.util.update(AWS.util.copy(obj1), obj2);
  },

  copy: function copy(object) {
    var dupe = {};
    /*jshint forin:false */
    for (var key in object) {
      dupe[key] = object[key];
    }
    return dupe;
  },

  isEmpty: function isEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return true;
  },

  error: function error(err, options) {
    err.message = err.message || null;
    err.retryable = err.retryable || false;

    if (typeof options === 'string') {
      err.message = options;
    } else {
      AWS.util.update(err, options);
    }

    err.name = err.code || 'Error';
    return err;
  },

  /**
   * @api private
   */
  inherit: function inherit(klass, features) {
    var newObject = null;
    if (features === undefined) {
      features = klass;
      newObject = {};
    } else {
      /*jshint newcap:false camelcase:false */
      var ctor = function __ctor_wrapper__() {};
      ctor.prototype = klass.prototype;
      newObject = new ctor();
    }
    features.constructor.prototype = newObject;
    AWS.util.update(features.constructor.prototype, features);
    features.constructor.__super__ = klass;
    return features.constructor;
  }

};

module.exports = AWS.util;
