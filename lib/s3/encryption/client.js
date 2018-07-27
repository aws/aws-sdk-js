var AWS = require('../../core');

/* Provides an encryption client that encrypts and decrypts data client-side,
 * storing the encrypted data in Amazon S3.
 *
 * This client uses a process called "envelope encryption". Your private
 * encryption keys and plain-text of your data are **never** sent to
 * Amazon S3. **If you loose your encryption keys, you will not be able to
 * un-encrypt your data.**
 *
 * ## Envelope Encryption Overview
 *
 * The goal of envelope encryption is to combine the performance of
 * fast symmetric encryption while maintaining the secure key management
 * that asymmetric keys provide.
 *
 * A one-time-use symmetric key (envelope key) is generated client-side.
 * This is used to encrypt the data client-side. This key is then
 * encrypted by your master key and stored alongside your data in Amazon
 * S3.
 *
 * When accessing your encrypted data with the encryption client,
 * the encrypted envelope key is retrieved and decrypted client-side
 * with your master key. The envelope key is then used to decrypt the
 * data client-side.
 *
 * One of the benefits of envelope encryption is that if your master key
 * is compromised, you have the option of jut re-encrypting the stored
 * envelope symmetric keys, instead of re-encrypting all of the
 * data in your account.
 *
 * ## Basic Usage
 *
 * The encryption client requires an {Aws::S3::Client}. If you do not
 * provide a `:client`, then a client will be constructed for you.
 *
 *     require 'openssl'
 *     key = OpenSSL::PKey::RSA.new(1024)
 *
 *     // encryption client
 *     s3 = new Aws.S3.Encryption.Client(encryption_key: key)
 *
 *     // round-trip an object, encrypted/decrypted locally
 *     s3.putObject(bucket:'aws-sdk', key:'secret', body:'handshake')
 *     s3.getObject(bucket:'aws-sdk', key:'secret')
 *     #=> 'handshake'
 *
 *     // reading encrypted object without the encryption client
 *     // results in the getting the cipher text
 *     (new Aws.S3.Client(bucket:'aws-sdk', key:'secret')).getObject()
 *     #=> "... cipher text ..."
 *
 * ## Keys
 *
 * For client-side encryption to work, you must provide one of the following:
 *
 * * An encryption key
 * * A {KeyProvider}
 * * A KMS encryption key id
 *
 * ### An Encryption Key
 *
 * You can pass a single encryption key. This is used as a master key
 * encrypting and decrypting all object keys.
 *
 *     key = OpenSSL::Cipher.new("AES-256-ECB").random_key // symmetric key
 *     key = OpenSSL::PKey::RSA.new(1024) // asymmetric key pair
 *
 *     s3 = Aws::S3::Encryption::Client.new(encryption_key: key)
 *
 * ### Key Provider
 *
 * Alternatively, you can use a {KeyProvider}. A key provider makes
 * it easy to work with multiple keys and simplifies key rotation.
 *
 * ### KMS Encryption Key Id
 *
 * If you pass the id to an AWS Key Management Service (KMS) key,
 * then KMS will be used to generate, encrypt and decrypt object keys.
 *
 *     // keep track of the kms key id
 *     kms = new Aws.KMS()
 *     kms.createKey(function(err, metadata){
 *        key_id = metadata.key_id;
 *     });
 *     new Aws.S3.Encryption.Client(
 *       kms_key_id: key_id,
 *       kms_client: kms,
 *     )
 *
 * ## Custom Key Providers
 *
 * A {KeyProvider} is any object that responds to:
 *
 * * `#encryption_materials`
 * * `#key_for(materials_description)`
 *
 * Here is a trivial implementation of an in-memory key provider.
 * This is provided as a demonstration of the key provider interface,
 * and should not be used in production:
 *
 *     KeyProvider: AWS.util.inherit({
 *
 *       initialize: function(default_key_name, keys){
 *         this.keys = keys
 *         this.encryption_materials = new AWS.S3.Encryption.Materials({
 *           key: this.keys[default_key_name],
 *           description: JSON.stringify({ key: default_key_name }),
 *         })
 *       },
 *
 *       key_for: function(matdesc){
 *         key_name = JSON.parse(matdesc)['key']
 *         if( key == @keys[key_name] ){
 *           return key;
 *         } else {
 *           console.log("encryption key not found for: "+ matdesc);
 *         }
 *       }
 *     });
 *
 * Given the above key provider, you can create an encryption client that
 * chooses the key to use based on the materials description stored with
 * the encrypted object. This makes it possible to use multiple keys
 * and simplifies key rotation.
 *
 *     // uses "new-key" for encrypting objects, uses either for decrypting
 *     keys = new AWS.S3.Encryption.KeyProvider('new-key', {
 *       "old-key" => new Buffer("kM5UVbhE/4rtMZJfsadYEdm2vaKFsmV2f5+URSeUCV4=", 'base64' , 'utf8'),
 *       "new-key" => new Buffer("w1WLio3agRWRTSJK/Ouh8NHoqRQ6fn5WbSXDTHjXMSo=", 'base64' , 'utf8'),
 *     })
 *
 *     // chooses the key based on the materials description stored
 *     // with the encrypted object
 *     s3 = new AWS.S3.Encryption.Client({ key_provider: keys })
 *
 * ## Materials Description
 *
 * A materials description is a JSON document string that is stored
 * in the metadata (or instruction file) of an encrypted object.
 * The {DefaultKeyProvider} uses the empty JSON document `"{}"`.
 *
 * When building a key provider, you are free to store whatever
 * information you need to identify the master key that was used
 * to encrypt the object.
 *
 * ## Envelope Location
 *
 * By default, the encryption client store the encryption envelope
 * with the object, as metadata. You can choose to have the envelope
 * stored in a separate "instruction file". An instruction file
 * is an object, with the key of the encrypted object, suffixed with
 * `".instruction"`.
 *
 * Specify the `:envelope_location` option as `:instruction_file` to
 * use an instruction file for storing the envelope.
 *
 *     // default behavior
 *     s3 = new AWS.S3.Encryption.Client({
 *       key_provider: ...,
 *       envelope_location: :metadata,
 *     })
 *
 *     // store envelope in a separate object
 *     s3 = new Aws::S3::Encryption::Client.new(
 *       key_provider: ...,
 *       envelope_location: :instruction_file,
 *       instruction_file_suffix: '.instruction' // default
 *     )
 *
 * When using an instruction file, multiple requests are made when
 * putting and getting the object. **This may cause issues if you are
 * issuing concurrent PUT and GET requests to an encrypted object.**
 */

 AWS.S3.Encryption.Client = AWS.util.inherit({
  //extend Deprecations

  /* Creates a new encryption client. You must provide on of the following
   * options:
   *
   * * `:encryption_key`
   * * `:kms_key_id`
   * * `:key_provider`
   *
   * You may also pass any other options accepted by {S3::Client#initialize}.
   *
   * @option options [S3::Client] :client A basic S3 client that is used
   *   to make api calls. If a `:client` is not provided, a new {S3::Client}
   *   will be constructed.
   *
   * @option options [OpenSSL::PKey::RSA, String] :encryption_key The master
   *   key to use for encrypting/decrypting all objects.
   *
   * @option options [String] :kms_key_id When you provide a `:kms_key_id`,
   *   then AWS Key Management Service (KMS) will be used to manage the
   *   object encryption keys. By default a {KMS::Client} will be
   *   constructed for KMS API calls. Alternatively, you can provide
   *   your own via `:kms_client`.
   *
   * @option options [#key_for] :key_provider Any object that responds
   *   to `#key_for`. This method should accept a materials description
   *   JSON document string and return return an encryption key.
   *
   * @option options [Symbol] :envelope_location (:metadata) Where to
   *   store the envelope encryption keys. By default, the envelope is
   *   stored with the encrypted object. If you pass `:instruction_file`,
   *   then the envelope is stored in a separate object in Amazon S3.
   *
   * @option options [String] :instruction_file_suffix ('.instruction')
   *   When `:envelope_location` is `:instruction_file` then the
   *   instruction file uses the object key with this suffix appended.
   *
   * @option options [KMS::Client] :kms_client A default {KMS::Client}
   *   is constructed when using KMS to manage encryption keys.
   */
  constructor: function(options) {
    var self = this;
    //AWS.SequentialExecutor.call(self);
    //if (!this.loadServiceClass) {
    //  throw AWS.util.error(new Error(),
    //    'Service must be constructed with `new\' operator');
    //}
    //var ServiceClass = this.loadServiceClass(options || {});
    //if (ServiceClass) return new ServiceClass(options);
    this.initialize(options);

    //self.configure(options);
  },

  initialize: function( options ) {
    options = options || {};
    this.client = this.extract_client(options);
    this.cipher_provider = this.cipherProvider(options);
    this.envelope_location = this.extract_location(options);
    this.instruction_file_suffix = this.extract_suffix(options);
    return this;
  },

  // @return [S3::Client]
  //attr_reader: client,

  // @return [KeyProvider, nil] Returns `nil` if you are using
  //   AWS Key Management Service (KMS).
  //attr_reader: key_provider,

  // @return [Symbol<:encryption_key, :instruction_file>]
  //attr_reader: envelope_location,

  // @return [String] When {#envelope_location} is `:instruction_file`,
  //   the envelope is stored in the object with the object key suffixed
  //   by this string.
  //attr_reader :instruction_file_suffix,

  /* Uploads an object to Amazon S3, encrypting data client-side.
   * See {S3::Client#putObject} for documentation on accepted
   * request parameters.
   * @option (see S3::Client#putObject)
   * @return (see S3::Client#putObject)
   * @see S3::Client#putObject
   */
  putObject: function( params, callback ) {
    // fallbacks
    params = params || {};
    callback = callback || function() {};
    params = this.normalParams(params);
    // classes
    var EncryptHandler = AWS.S3.Encryption.EncryptHandler;
    //req.handlers.add(EncryptHandler, { priority: 95 });
    // always update cipher ?
    var cipher_provider = this.cipherProvider(params);
    // create request
    var req = this.client.makeRequest('putObject', this.filterParams(params) );
    // encryption meta
    req['encryption'] = {
      cipher_provider: cipher_provider,
      envelope_location: this.envelope_location,
      instruction_file_suffix: this.instruction_file_suffix,
    }
    // add event listeners
    EncryptHandler.call( req );
    EncryptHandler.on('encrypted', function() {
      // process request
      req.send(callback);
    });
    EncryptHandler.on('error', function( err ) {
      callback(err);
    });
    return req;
  },

  /*
   * Gets an object from Amazon S3, decrypting  data locally.
   * See {S3::Client#getObject} for documentation on accepted
   * request parameters.
   * @option params [String] :instruction_file_suffix The suffix
   *   used to find the instruction file containing the encryption
   *   envelope. You should not set this option when the envelope
   *   is stored in the object metadata. Defaults to
   *   {#instruction_file_suffix}.
   * @option params [String] :instruction_file_suffix
   * @option (see S3::Client#getObject)
   * @return (see S3::Client#getObject)
   * @see S3::Client#getObject
   * @note The `:range` request parameter is not yet supported.
   */
  getObject: function( params, callback ) {
    // fallbacks
    params = params || {};
    callback = callback || function() {};
    params = this.normalParams(params);
    // prerequisites
    if ( params['range'] ) {
      //raise NotImplementedError, '#getObject with :range not supported yet'
    }
    var self = this;
    var DecryptHandler = AWS.S3.Encryption.DecryptHandler;
    var envelope_location,
      instruction_file_suffix = this.envelope_options(params);
    // create request
    var req = this.client.makeRequest('getObject', this.filterParams(params) );
    // encryption meta
    req['encryption'] = {
      cipher_provider: this.cipher_provider,
      envelope_location: envelope_location,
      instruction_file_suffix: instruction_file_suffix,
      cipherProvider: this.cipherProvider.bind(self)
    }
    // add event listeners
    //req.handlers.add(DecryptHandler)
    DecryptHandler.call( req );

    // events
    var decrypt_body, decrypt_error, response = {};
    DecryptHandler.on('error', function( err ) {
      decrypt_error = err;
    });
    DecryptHandler.on('decrypted', function( decrypt_body ) {
      response.Body = decrypt_body;
      callback(null, response);
    });
    // process request
    req.send(function(err, res) {
      err = err || decrypt_error || false;
      if( err ) return callback(err, res);
      // wait for the message to get decrypted before returning to the callback
      response = res;
    });
    return req;
  },

  /**
   * @api private
   */
  extract_client: function( options ) {
    if ( options['client'] ) return options['client'];
    // duplicate options (better way?)
    var opt = JSON.parse( JSON.stringify( options ) );
    // remove unwanted options
    delete opt['kms_key_id'];
    delete opt['kms_client'];
    delete opt['key_provider'];
    delete opt['encryption_key'];
    delete opt['envelope_location'];
    delete opt['instruction_file_suffix'];
    delete opt['metadata'];
    delete opt['body'];
    return new AWS.S3( opt );
  },

  kms_client: function( options ) {
    // exit now if we passed a client as part of the (init) options
    if ( options['kms_client'] ) return options['kms_client'];
    // create new KMS client
    // find region from the options / fallback to the store config
    var region = this.client.config.region;
    var id = options['kms_cmk_id'] || options['kms_key_id'] || false;
    if ( id ) {
      region = id.replace('arn:aws:kms:', '');
      region = region.substr(0, region.indexOf(':') );
    }

    return new AWS.KMS({
        apiVersion: '2014-11-01',
        region: region,
        credentials: this.client.config.credentials,
    });
  },

  cipherProvider: function( options ) {
    // classes
    var KmsCipherProvider = AWS.S3.Encryption.KmsCipherProvider;
    var DefaultCipherProvider = AWS.S3.Encryption.DefaultCipherProvider;
    //
    var self = this;
    var id = options['kms_key_id'] || options['kms_cmk_id'] || false;
    //
    if ( id ) {
      return new KmsCipherProvider({
        kms_key_id: id,
        kms_client: self.kms_client(options),
        encryption_key: options['encryption_key'] || null
      });
    } else {
      // kept here for backwards compatability, {#key_provider} is deprecated
      this.key_provider = this.extract_key_provider(options);
      return new DefaultCipherProvider({ key_provider: this.key_provider });
    }
  },

  extract_key_provider: function(options) {
    if ( options['key_provider'] ) {
      return options['key_provider'];
    //} else if ( options['encryption_key'] || options['kms_key_id'] ) {
    } else {
      // classes
      var DefaultKeyProvider = AWS.S3.Encryption.DefaultKeyProvider;
      return new DefaultKeyProvider(options);
    } /* else {
      var msg = 'you must pass a :kms_key_id, :key_provider, or :encryption_key';
      //raise ArgumentError, msg
      AWS.util.error(new Error(), {
        message: msg
      });

    }*/
  },

  envelope_options: function( params ) {
    var location = params['envelope_location'] || this.envelope_location;
    var suffix = params['instruction_file_suffix'];
    // delete used params
    delete params['envelope_location'];
    delete params['instruction_file_suffix'];
    if ( suffix ) {
      return ['instruction_file', suffix];
    } else {
      return [location, this.instruction_file_suffix];
    }
  },

  extract_location: function(options) {
    location = options['envelope_location'] || this.metadata;
    if ( ['metadata', 'instruction_file'].indexOf( location ) > -1 ) {
      return location;
    } else {
      var msg = ':envelope_location must be :metadata or :instruction_file';
      //msg << "got "+ location.toString()
      //raise ArgumentError, msg
      AWS.util.error(new Error(), {
        message: msg
      });
    }
  },

  extract_suffix: function(options) {
    suffix = options['instruction_file_suffix'] || '.instruction';
    if ( typeof suffix == 'string') {
      return suffix;
    } else {
      var msg = ':instruction_file_suffix must be a String';
      //raise ArgumentError, msg
      AWS.util.error(new Error(), {
        message: msg
      });
    }
  },

  // converting camel case variables to normal underscore vars
  normalParams: function( params ){
    // normalize kms id
    if( params['KMSKeyId'] ){
      params['kms_key_id'] = params['KMSKeyId'];
      delete params['KMSKeyId'];
    }
    if( params['KMSClient'] ){
      params['kms_client'] = params['KMSClient'];
      delete params['KMSClient'];
    }
    if( params['EncryptionKey'] ){
      params['encryption_key'] = params['EncryptionKey'];
      delete params['EncryptionKey'];
    }
    if( params['Body'] ){
      params['body'] = params['Body'];
      delete params['Body'];
    }
    return params;
  },

  // remove params before sending API requests
  filterParams: function( params ){
    // clone object
    var filtered = JSON.parse( JSON.stringify( params ) );
    delete filtered['kms_key_id'];
    delete filtered['metadata'];
    delete filtered['encryption_key'];
    if( filtered['body'] ){
      filtered['Body'] = filtered['body'];
      delete filtered['body'];
    }
    return filtered;

  }

});


module.exports = AWS.S3.Encryption.Client;
