var AWS = require('../../core');
/*
 * The default key provider is constructed with a single key
 * that is used for both encryption and decryption, ignoring
 * the possible per-object envelope encryption materials description.
 */
AWS.S3.Encryption.DefaultKeyProvider = AWS.util.inherit(AWS.S3.Encryption.KeyProvider, {

  constructor: function(options) {
    this.initialize(options);
  },

  /**
    * @api private
    */
  // @option options [required, OpenSSL::PKey::RSA, String] :encryption_key
  //   The master key to use for encrypting objects.
  // @option options [String<JSON>] :materials_description ('{}')
  //   A description of the encryption key.
  initialize: function( options ) {
    options = options || {};
    // classes
    var Materials = AWS.S3.Encryption.Materials;
    this.encryption_materials = new Materials({
      key: options['encryption_key'],
      description: options['materials_description'] || '{}'
    });
  },
  /*
  // @return [Materials]
  function encryption_materials(){
    @encryption_materials
  },
  */
  // @param [String<JSON>] materials_description
  // @return Returns the key given in the constructor.
  key_for: function( materials_description ) {
    //return this.encryption_materials.key;
    return materials_description['kms_cmk_id'];
  }

});

module.exports = AWS.S3.Encryption.DefaultKeyProvider;
