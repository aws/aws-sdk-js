var AWS = require('./core');
var cryptoLib = require('crypto');

/**
 * @namespace AWS.util
 */
AWS.util = {

  /**
   * @module AWS.util.date
   */
  date: {
    /**
     * @method getDate
     */
    getDate: function getDate() { return new Date(); },

    /**
     * @method getISODateString
     */
    getISODateString: function getISODateString(date) {
      if (date === undefined) { date = AWS.util.date.getDate(); }
      return date.toISOString().replace(/[:\-]|\.\d{3}/g, '');
    },

    /**
     * @method getUTCDateString
     */
    getUTCDateString: function getUTCDateString(date) {
      if (date === undefined) { date = AWS.util.date.getDate(); }
      return date.toUTCString();
    }

  },

  /**
   * @module AWS.util.crypto
   */
  crypto: {
    /**
     * @method hmac
     */
    hmac: function hmac(key, string, digest) {
      if (!digest) { digest = 'binary'; }
      return cryptoLib.createHmac('sha256', key).update(string).digest(digest);
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
        out.push(('0' + data.charCodeAt(i).toString(16)).substr(-2,2));
      }
      return out.join('');
    }

  },

  each: function(object, iterFunction) {
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        iterFunction.call(this, key, object[key]);
      }
    }
  },

  /**
   * @method arrayEach
   * @param {Array} array
   */
  arrayEach: function(array, iterFunction) {
    /*jshint forin:false*/
    for (var idx in array) {
      if (array.hasOwnProperty(idx)) {
        iterFunction.call(this, array[idx], parseInt(idx, 10));
      }
    }
  },

  update: function(obj1, obj2) {
    AWS.util.each(obj2, function iterator(key, item) {
      obj1[key] = item;
    });
    return obj1;
  },

  merge: function(obj1, obj2) {
    return AWS.util.update(AWS.util.copy(obj1), obj2);
  },

  copy: function(object) {
    var copy = {};
    /*jshint forin:false */
    for (var key in object) {
      copy[key] = object[key];
    }
    return copy;
  },

  inherit: function(klass, features) {
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
