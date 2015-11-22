var AWS = require('../../core'),
    crypto = require('crypto');

AWS.S3.Encryption.DefaultCipherProvider = AWS.util.inherit({

  constructor: function(options) {
    this.initialize(options);
  },
  /**
   * @api private
   */
  initialize: function( options ) {
    options = options || {};
    this.key_provider = options['key_provider'];
  },

  // @return [Array<Hash,Cipher>] Creates an returns a new encryption
  //   envelope and encryption cipher.
  encryption_cipher: function() {
    var envelope = {
      'x-amz-key': Utils.encode64(encrypt(envelope_key(cipher))),
      'x-amz-iv': Utils.encode64(envelope_iv(cipher)),
      'x-amz-matdesc': this.materials_description(),
    };
    var cipher = crypto.createCipheriv('aes-256-cbc', envelope['x-amz-key'], envelope['x-amz-iv'] );
    return [envelope, cipher];
  },

  // @return [Cipher] Given an encryption envelope, returns a
  //   decryption cipher.
  decryption_cipher: function(envelope) {
    var Utils = AWS.S3.Encryption.Utils;
    // variables
    var master_key = this.key_provider.key_for(envelope['x-amz-matdesc']),
        key = Utils.decrypt(master_key, Utils.decode64( envelope['x-amz-key'] || envelope['x-amz-key-v2'] ));
    // cipher
    var cipher = Utils.createDecipher(key, envelope);
    return cipher;
  },


  /**
   * @api private
   */
  envelope_key: function(cipher) {
    cipher.key = cipher.random_key;
  },

  envelope_iv: function(cipher) {
    cipher.iv = cipher.random_iv;
  },

  encrypt: function(data) {
    var Utils = AWS.S3.Encryption.Utils;
    return Utils.encrypt( this.key_provider.encryption_materials.key, data);
  },

  materials_description: function() {
    return this.key_provider.encryption_materials.description;
  }

});



module.exports = AWS.S3.Encryption.DefaultCipherProvider;
