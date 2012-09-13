var AWS = require('./core');
var cryptoLib = require('crypto');

/**
 * @namespace AWS.util
 */
AWS.util = {

  each: function(list, block) {
    for (var i in list) {
      if (list.hasOwnProperty(i) {
        block.call(list[i]);
      }
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
     * @method getISODateString
     */
    getISODateString: function getISODateString(date) {
      if (date === undefined) { date = AWS.util.date.getDate(); }
      return date.toISOString().replace(/[:-]|\.\d{3}/g, '');
    }
  },

  /**
   * @module AWS.util.crypto
   */
  crypto: {

    /**
     * @method hmachex
     */
    hmachex: function hmachex(key, string) {
      return cryptoLib.createHmac('sha256', key).update(string).digest('hex');
    },

    /**
     * @method hmac
     */
    hmac: function hmac(key, string) {
      return cryptoLib.createHmac('sha256', key).update(string).digest('binary');
    },

    /**
     * @method sha256hex
     */
    sha256hex: function sha256hex(string) {
      return cryptoLib.createHash('sha256').update(string).digest('hex');
    },

    /**
     * @method sha256
     */
    sha256: function sha256(string) {
      return cryptoLib.createHash('sha256').update(string).digest('binary');
    },

    /**
     * @method toHex
     */
    toHex: function toHex(data) {
      var out = [];
      for (var i = 0; i < data.length; i++) {
        out.push(("0" + data.charCodeAt(i).toString(16)).substr(-2,2));
      }
      return out.join('');
    }
  },

  each: function(object, iterFunction) {
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        iterFunction.call(this, object[key], key);
      }
    }
  },

  update: function(obj1, obj2) {
    AWS.util.each(obj2, function iterator(item, key) {
      obj1[key] = item;
    });
    return obj1;
  },

  merge: function(obj1, obj2) {
    return AWS.util.update(AWS.util.copy(obj1), obj2);
  },

  copy: function(object) {
    var copy = {};
    for (var key in object) {
      copy[key] = object[key];
    }
    return copy;
  },

  inherit: function(klass, features) {
    var newObject = null;
    if (features === undefined) {
      features = klass;
      newObject = {}
    } else {
      ctor = function __ctor_wrapper__() {};
      ctor.prototype = klass.prototype;
      newObject = new ctor();
    }
    features.constructor.prototype = newObject;
    AWS.util.update(features.constructor.prototype, features);
    return features.constructor;
  }

};
