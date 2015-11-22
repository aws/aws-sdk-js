var AWS = require('../../core');

var ONE_MEGABYTE = 1024 * 1024;

var UNSAFE_MSG = 'unsafe encryption, data is longer than key length';

/*
 * Provides an IO wrapper encrpyting a stream of data.
 * It is possible to use this same object for decrypting. You must
 * initialize it with a decryptiion cipher in that case and the
 * IO object must contain cipher text instead of plain text.
 */
AWS.S3.Encryption.IOEncrypter =  AWS.util.inherit({

  constructor: function(cipher, io) {
    this.initialize(cipher, io);
  },

  /**
   * @api private
   */
  initialize: function(cipher, io) {
    this.encrypted = ( io.size <= ONE_MEGABYTE )
      ? encrypt_to_stringio(cipher, io.read)
      : encrypt_to_tempfile(cipher, io);
    this.size = this.encrypted.size;
  },

  // @return [Integer]
  //attr_reader :size,
  read: function(bytes, output_buffer) {
    bytes = bytes || null;
    output_buffer = output_buffer || null;
    if ( Tempfile === this.encrypted && this.encrypted.closed ) {
      this.encrypted.open();
      this.encrypted.binmode();
    }
    this.encrypted.read(bytes, output_buffer);
  },

  rewind: function() {
    this.encrypted.rewind()
  },

  /**
   * @api private
   */
  close: function() {
    if ( Tempfile === this.encrypted ) this.encrypted.close();
  },

  /**
   * @api private
   */
  encrypt_to_stringio: function(cipher, plain_text) {
    if ( plain_text.empty ) {
      cipher.final('utf-8');
    } else {
      //if ( cipher_size(key) < cipher_size(data) ) console.log(UNSAFE_MSG);
      cipher.update(plain_text, 'utf-8') + cipher.final('utf-8');
    }
  },

  encrypt_to_tempfile: function(cipher, io) {
    var os = require('os');
    encrypted = os.tmpdir() + Math.random().toString(36).substr(4); //.new(self.object_id.to_s)
    //encrypted.binmode();
    var output = cipher.finalize();

    fs.writeFile(encrypted, output, function(err) {
      if (err) return console.log(err);
    });
    //encrypted.write(cipher.final);
    //encrypted.rewind();
    return encrypted;
  }

});

module.exports = AWS.S3.Encryption.IOEncrypter;
