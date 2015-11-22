var AWS = require('../../core'),
    crypto = require('crypto');

AWS.util.update(AWS.S3.Encryption, {

  Utils: {
    //class << self

    // encrypts a key
    encrypt: function(key, data) {
      // todo
      // asymmetric encryption
      //return key.public_encrypt(data);
      // symmetric encryption
      //return cipher.update(data) + cipher.final;
      return key;
    },

    // decrypts a key
    decrypt: function(key, data) {
      // todo
      //key.private_decrypt(data);
      return key;
    },

    // creates a cipher for encryption
    createCipher: function(key, envelope) {
      // prerequisites
      var iv = ( envelope['x-amz-iv'] ) ? this.decode64( envelope['x-amz-iv'] ) : null; // or random bytes?

      var type = data['x-amz-cek-alg'] || false;
      switch ( type ) {
        case 'AES/CBC/PKCS5Padding':
          cipher = aes_encryption_cipher('CBC', key, iv);
        break;
        case 'AES/GCM/NoPadding':
          cipher = aes_encryption_cipher('GCM', key, iv);
        break;
        case 'AES/ECB/PKCS5Padding':
          cipher = aes_encryption_cipher('ECB', key, iv);
        break;
        default:
          // encode to CBC by default
          cipher = aes_encryption_cipher('CBC', key, iv);
        break;
      }

      return cipher;
    },

    // creates a cipher for decryption
    createDecipher: function(key, envelope) {
      //
      var type = envelope['x-amz-cek-alg'] || false;
      var iv = ( envelope['x-amz-iv'] ) ? this.decode64( envelope['x-amz-iv'] ) : null;

      switch ( type ) {
        case 'AES/CBC/PKCS5Padding':
          return aes_decryption_cipher('CBC', key, iv);
        break;
        case 'AES/GCM/NoPadding':
          return aes_decryption_cipher('GCM', key, iv);
        break;
        case 'AES/ECB/PKCS5Padding':
          return aes_decryption_cipher('ECB', key, iv);
        break;
      }
      // no valid type, output error
      var msg = 'decryption failed, possible incorrect key';
      //raise Errors::DecryptionError, msg
      AWS.util.error(new Error(), {
        code: 'OpenSSL::Cipher::CipherError',
        message: msg
      });
    },

    encode64: function(str) {
      return new Buffer( str, 'utf8', 'base64');
    },

    decode64: function(str) {
      return new Buffer( str, 'base64' , 'utf8');
    }
  }

});

// Internal

/*
 * @param [String] block_mode "CBC" or "ECB"
 * @param [OpenSSL::PKey::RSA, String, nil] key
 * @param [String, nil] iv The initialization vector
 */
function aes_encryption_cipher(block_mode, key, iv) {
  key = key || null,
  iv = iv || null;
  return aes_cipher('encrypt', block_mode, key, iv);
}
/*
 * @param [String] block_mode "CBC" or "ECB"
 * @param [OpenSSL::PKey::RSA, String, nil] key
 * @param [String, nil] iv The initialization vector
 */
function aes_decryption_cipher(block_mode, key, iv) {
  key = key || null,
  iv = iv || null;
  return aes_cipher('decrypt', block_mode, key, iv);
}
/*
 * @param [String] mode "encrypt" or "decrypt"
 * @param [String] block_mode "CBC" or "ECB"
 * @param [OpenSSL::PKey::RSA, String, nil] key
 * @param [String, nil] iv The initialization vector
 */
function aes_cipher(mode, block_mode, key, iv) {
  var cipher;
  block_mode = block_mode.toString().toLowerCase();
  var algorithm = ( key )
    ? 'aes-'+ cipher_size(key) +'-'+ block_mode
    : 'aes-256-'+ block_mode;

  switch ( mode ) {
    case 'encrypt':
      cipher = ( iv )
        ? crypto.createCipheriv(algorithm, key, iv)
        : crypto.createCipher(algorithm, key);
    break;
    case 'decrypt':
      cipher = ( iv )
        ? crypto.createDecipheriv(algorithm, key, iv)
        : crypto.createDecipheriv(algorithm, key);
    break;
  }
  return cipher;
}
/*
 * @param [String] key
 * @return [Integer]
 * @raise ArgumentError
 */
function cipher_size(key) {
  return key.length * 8;
}

//module.exports = AWS.S3.Encryption.Utils;
