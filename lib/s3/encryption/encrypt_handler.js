var AWS = require('../../core');

AWS.S3.Encryption.EncryptHandler = AWS.util.inherit({

  constructor: function(options) {
    this.initialize(options);
  },

  call: function(context) {
    var envelope, cipher = context['encryption']['cipher_provider'].encryption_cipher;
    this.apply_encryption_envelope(context, envelope, cipher);
    this.apply_encryption_cipher(context, cipher);
    //this.handler.call(context);
  },

  /**
   * @api private
   */
  apply_encryption_envelope: function(context, envelope, cipher) {
    context['encryption']['cipher'] = cipher;
    if ( context['encryption']['envelope_location'] == this.metadata ) {
      context.params['metadata'] = context.params['metadata'] || {};
      context.params['metadata'].update(envelope);
    } else {
      // :instruction_file
      var suffix = context['encryption']['instruction_file_suffix'];
      context.client.put_object({
        bucket: context.params['bucket'],
        key: context.params['key'] + suffix,
        body: JSON.stringify(envelope)
      });
    }
  },

  apply_encryption_cipher: function(context, cipher) {
    var io = context.params['body'] || '';
    if ( typeof io === 'string' ) io = StringIO.new(io);
    context.params['body'] = new AWS.S3.Encryption.IOEncrypter(cipher, io);
    context.params['metadata'] = context.params['metadata'] || {};
    context.params['metadata']['x-amz-unencrypted-content-length'] = io.size;
    if ( md5 = context.params['content_md5'] ) {
      delete context.params['content_md5'];
      context.params['metadata']['x-amz-unencrypted-content-md5'] = md5
    }
    context.http_response.on('httpHeaders', function() {
        context.params['body'].close;
    });
  }

});

module.exports = AWS.S3.Encryption.EncryptHandler;
