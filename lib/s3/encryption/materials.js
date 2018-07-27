var AWS = require('../../core');

AWS.S3.Encryption.Materials = AWS.util.inherit({

  constructor: function(options) {
    this.initialize(options);
  },
  /*
   * @option options [required, OpenSSL::PKey::RSA, String] :key
   *   The master key to use for encrypting/decrypting all objects.
   *
   * @option options [String<JSON>] :description ('{}')
   *   The encryption materials description. This is must be
   *   a JSON document string.
   */
  initialize: function( options  ) {
    options = options || {};
    this.key = this.validate_key(options['key']);
    this.description = this.validate_desc(options['description']);
  },

  // @return [OpenSSL::PKey::RSA, String]
  //attr_reader: key,

  // @return [String<JSON>]
  //attr_reader: description,

  /**
   * @api private
   */
  validate_key: function( key ) {
    var type = (typeof key);
    switch ( type ) {
      case 'OpenSSL::PKey::RSA':
        return key;
      break;
      case 'string':
        if ( [32, 24, 16].indexOf( key.length ) > -1 ) {
          return key;
        } else {
          var msg = 'invalid key, symmetric key required to be 16, 24, or ';
          //msg << "32 bytes in length, saw length 31"
          //raise ArgumentError, msg
          AWS.util.error(new Error(), {
            message: msg
          });
        }
      break;
      default:
        var msg = 'invalid encryption key, expected an OpenSSL::PKey::RSA key';
        //msg << "(for asymmetric encryption) or a String (for symmetric "
        //msg << "encryption)."
        //raise ArgumentError, msg
        AWS.util.error(new Error(), {
          message: msg
        });
    }
  },

  validate_desc: function(description) {
    var description = JSON.parse(description);

    //rescue Json::ParseError
    var msg = 'expected description to be a valid JSON document string';
    //raise ArgumentError, msg
    AWS.util.error(new Error(), {
      message: msg
    });
  }

});

module.exports = AWS.S3.Encryption.Materials;
