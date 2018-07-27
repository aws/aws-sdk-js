var AWS = require('../../core');

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
    this.encryption_key = options['encryption_key'];
  },

  // @return [Array<Hash,Cipher>] Creates an returns a new encryption
  //   envelope and encryption cipher.
  encryption_cipher: function(callback) {
    // classes
    var Utils = AWS.S3.Encryption.Utils;
    var encryption_context = { kms_cmk_id: this.kms_key_id };
    var iv = Utils.randomIV(),
        key, cipher;

    var envelope = {
      'x-amz-iv': Utils.encode64(iv),
      'x-amz-cek-alg': 'AES/CBC/PKCS5Padding', // variable?
      'x-amz-wrap-alg': 'kms',
      'x-amz-matdesc': JSON.stringify(encryption_context)
    };

    if ( this.encryption_key ) {
      // assume this is right?
      envelope['x-amz-key-v2'] = (typeof this.encryption_key == 'string') ? Utils.encode64( this.encryption_key ) : this.encryption_key;
      //key = key_data.ciphertext_blob;
      // decrypt encryption key
      this.kms_client.decrypt({
        CiphertextBlob: this.encryption_key,
        EncryptionContext: encryption_context,
      }, function(err, response) {
        if ( err ) return callback( err );
        key = Utils.decode64(response.Plaintext);
        cipher = Utils.createDecipher( key, envelope );
        return callback(null, { envelope: envelope, cipher: cipher });
      });
    } else {
      // generate a new encryption key
      this.kms_client.generateDataKey({
        KeyId: this.kms_key_id,
        EncryptionContext: encryption_context,
        KeySpec: 'AES_256',
      }, function(err, key_data){
        if ( err ) return callback( err );
        key = key_data.Plaintext;
        envelope['x-amz-key-v2'] = Utils.encode64(key_data.CiphertextBlob);
        cipher = Utils.createCipher( key, envelope );
        return callback(null, { envelope: envelope, cipher: cipher });
      });
    }

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
