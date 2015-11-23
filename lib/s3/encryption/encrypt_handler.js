var AWS = require('../../core');

AWS.S3.Encryption.EncryptHandler = AWS.util.update({

  call: function(context) {
    var self = this,
        envelope, cipher;
    // callback to separate method?
    context['encryption']['cipher_provider'].encryption_cipher(function(err, response){
      if( err ) return self.trigger('error', err);
      envelope = response.envelope;
      cipher = response.cipher;
      // condition?
      self.apply_encryption_envelope(context, envelope, cipher);
      self.apply_encryption_cipher(context, cipher);
      self.trigger('encrypted', context);
    });
  },

  /**
   * @api private
   */
  apply_encryption_envelope: function(context, envelope, cipher) {
    context['encryption']['cipher'] = cipher;
    var metadata = context['encryption']['envelope_location'];
    if ( metadata ) {
      context.params['Metadata'] = context.params['Metadata'] || context.params['metadata'] || {};
      context.params['Metadata'] = AWS.util.update(envelope);
    } else {
      // :instruction_file
      var suffix = context['encryption']['instruction_file_suffix'];
      // NOT WORKING
      /*
      context.client.putObject({
        bucket: context.params['bucket'],
        key: context.params['key'] + suffix,
        body: JSON.stringify(envelope)
      });
      */
    }
  },

  apply_encryption_cipher: function(context, cipher) {
    var io = context.params['Body'] || '';
    //if ( typeof io === 'string' ) io = StringIO.new(io);
    var encrypter = new AWS.S3.Encryption.IOEncrypter(cipher, io);
    // no delay?
    context.params['Body'] = encrypter.body;
    context.params['Metadata'] = context.params['Metadata'] || {};
    context.params['Metadata']['x-amz-unencrypted-content-length'] = (io.length).toString();
    var md5 = context.params['content_md5'];
    if ( md5 ) {
      delete context.params['content_md5'];
      context.params['Metadata']['x-amz-unencrypted-content-md5'] = md5;
    }
    /*
    context.http_response.on('httpHeaders', function() {
        context.params['body'].close;
    });
    */
  },

  // Helpers
  // - events
  on: function(e, callback) {
    this._events = this._events || [];
    this._events[e] = this._events[e] ||[];
    this._events[e].push(callback);
  },

  trigger: function(e, params) {
    var events = this._events[e] || false;
    if ( !events ) return;
    for (var i in events ) {
      events[i](params);
    }
    // reset?
    //delete this._events[trigger];
  }

});

module.exports = AWS.S3.Encryption.EncryptHandler;
