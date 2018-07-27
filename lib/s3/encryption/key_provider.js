var AWS = require('../../core');

/*
 * This module defines the interface required for a {Client#key_provider}.
 * A key provider is any object that:
 *
 * * Responds to {#encryption_materials} with an {Materials} object.
 *
 * * Responds to {#key_for}, receiving a JSON document String,
 *   returning an encryption key. The returned encryption key
 *   must be one of:
 *
 *   * `OpenSSL::PKey::RSA` - for asymmetric encryption
 *   * `String` - 32, 24, or 16 bytes long, for symmetric encryption
 */

AWS.S3.Encryption.KeyProvider = AWS.util.inherit({

  constructor: function(options) {
    this.initialize(options);
  },

  // @return [Materials]
  encryption_materials: function() {},

  // @param [String<JSON>] materials_description
  // @return [OpenSSL::PKey::RSA, String] encryption_key
  key_for: function( materials_description ) {}

});

module.exports = AWS.S3.Encryption.KeyProvider;
