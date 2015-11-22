var AWS = require('../../core'),
    crypto = require('crypto');

AWS.S3.Encryption.KmsCipherProvider = AWS.util.inherit({

  constructor: function(options) {
    this.initialize(options);
  },
  /**
   * @api private
   */
  initialize: function( options ) {
    options = options || {};
    this.kms_key_id = options['kms_key_id'];
    this.kms_client = options['kms_client'];
  },

  // @return [Array<Hash,Cipher>] Creates an returns a new encryption
  //   envelope and encryption cipher.
  encryption_cipher: function() {
    // classes
    var Utils = AWS.S3.Encryption.Utils;
    var encryption_context = { kms_cmk_id: this.kms_key_id };
    key_data = this.kms_client.generate_data_key({
      key_id: this.kms_key_id,
      encryption_context: encryption_context,
      key_spec: 'AES_256',
    });
    var cipher = crypto.createCipheriv('aes-256-cbc', key_data.ciphertext_blob, cipher.random_iv );
    cipher.key = key_data.plaintext;
    var envelope = {
      'x-amz-key-v2': Utils.encode64(key_data.ciphertext_blob),
      'x-amz-iv': Utils.encode64(cipher.iv),
      'x-amz-cek-alg': 'AES/CBC/PKCS5Padding',
      'x-amz-wrap-alg': 'kms',
      'x-amz-matdesc': JSON.stringify(encryption_context)
    };
    var cipher = Utils.createCipher( key, envelope );

    return [envelope, cipher];
  },

  // @return [Cipher] Given an encryption envelope, returns a
  //   decryption cipher.
  decryption_cipher: function(envelope, callback) {
    // classes
    var Utils = AWS.S3.Encryption.Utils;
    var encryption_context = JSON.parse(envelope['x-amz-matdesc']);
    this.kms_client.decrypt({
      CiphertextBlob: Utils.decode64( envelope['x-amz-key-v2'] ),
      EncryptionContext: encryption_context,
    }, function(err, response) {
      if ( err ) return callback( err );
      var key = Utils.decode64(response.Plaintext);
      var cipher = Utils.createDecipher( key, envelope );

      return callback(null, cipher);
    });

  }

});

module.exports = AWS.S3.Encryption.KmsCipherProvider;
