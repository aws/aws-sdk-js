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
  }

};
