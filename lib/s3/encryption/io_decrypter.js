var AWS = require('../../core');

//AWS.S3.Encryption.IODecrypter = ;
AWS.S3.Encryption.IODecrypter = AWS.util.inherit({

  constructor: function(cipher, io) {
    this.initialize(cipher, io);
  },

  /**
   * @api private
   */
  // @param [OpenSSL::Cipher] cipher
  // @param [#write] io An IO-like object that responds to {#write}.
  initialize: function(cipher, io) {
    this.orig_cipher = cipher; //clone?
    this.cipher = cipher;
    this.io = '';
    this.write(io);
    //this.reset_cipher()
  },

  // @return [#write]
  //attr_reader :io,

  write: function(chunk) {
    this.io += this.cipher.update(chunk, 'binary', 'utf8');
  },

  finalize: function() {
    this.io += this.cipher.final('utf8');
    return this.io;
  },


  /**
   * @api private
   */
  reset_cipher: function() {
    this.cipher = this.orig_cipher.clone;
  }

});

module.exports = AWS.S3.Encryption.IODecrypter;
