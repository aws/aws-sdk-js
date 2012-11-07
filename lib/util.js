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

var AWS = require('./core');
var cryptoLib = require('crypto');

/**
 * @namespace AWS.util
 */
AWS.util = {

  uriEscape: function uriEscape(string) {
    /*jshint undef:false */
    return escape(string).replace(/\+/g, '%2B').replace(/\//g, '%2F').replace(/%7E/g, '~').replace(/\=/g, '%3D');
  },

  uriEscapePath: function uriEscapePath(string) {
    var parts = [];
    AWS.util.arrayEach(string.split('/'), function (part) {
      parts.push(AWS.util.uriEscape(part));
    });
    return parts.join('/');
  },

  base64: {

    encode: function encode64(string) {
      return new Buffer(string).toString('base64');
    }

  },

  /**
   * @module AWS.util.date
   */
  date: {

    /**
     * @method getDate
     */
    getDate: function getDate() { return new Date(); },

    /**
     * @method iso8601
     */
    iso8601: function iso8601(date) {
      if (date === undefined) { date = AWS.util.date.getDate(); }
      return date.toISOString();
    },

    /**
     * @method rfc822
     */
    rfc822: function rfc822(date) {
      if (date === undefined) { date = AWS.util.date.getDate(); }
      return date.toUTCString();
    },

    /**
     * @method unixTimestamp
     */
    unixTimestamp: function unixTimestamp(date) {
      if (date === undefined) { date = AWS.util.date.getDate(); }
      return date.getTime() / 1000;
    }

  },

  /**
   * @module AWS.util.crypto
   */
  crypto: {

    /**
     * @method hmac
     */
    hmac: function hmac(key, string, digest, fn) {
      if (!digest) digest = 'binary';
      if (!fn) fn = 'sha256';
      return cryptoLib.createHmac(fn, key).update(string).digest(digest);
    },

    /**
     * @method sha256
     */
    sha256: function sha256(string, digest) {
      if (!digest) { digest = 'binary'; }
      return cryptoLib.createHash('sha256').update(string).digest(digest);
    },

    /**
     * @method toHex
     */
    toHex: function toHex(data) {
      var out = [];
      for (var i = 0; i < data.length; i++) {
        out.push(('0' + data.charCodeAt(i).toString(16)).substr(-2, 2));
      }
      return out.join('');
    }

  },

  abort: {},

  each: function each(object, iterFunction) {
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        var ret = iterFunction.call(this, key, object[key]);
        if (ret === AWS.util.abort) break;
      }
    }
  },

  /**
   * @method arrayEach
   * @param {Array} array
   */
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
