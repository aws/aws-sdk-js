var AWS = require('../../core');

var V1_ENVELOPE_KEYS = [
  'x-amz-key',
  'x-amz-iv',
  'x-amz-matdesc'
];

var V2_ENVELOPE_KEYS = [
  'x-amz-key-v2',
  'x-amz-iv',
  'x-amz-cek-alg',
  'x-amz-wrap-alg',
  'x-amz-matdesc'
];

var POSSIBLE_ENVELOPE_KEYS = V1_ENVELOPE_KEYS.concat( V2_ENVELOPE_KEYS.filter(function (item) {
    return V1_ENVELOPE_KEYS.indexOf(item) < 0;
}));

var POSSIBLE_ENCRYPTION_FORMATS = [
  'AES/CBC/PKCS5Padding',
  'AES/GCM/NoPadding'
]
// possible to support
//   RSA/ECB/OAEPWithSHA-256AndMGF1Padding

AWS.S3.Encryption.DecryptHandler = AWS.util.update({
  //< Seahorse::Client::Handler

  /**
   * @api private
   */
  call: function( context ) {
    this.attach_http_event_listeners(context);
    //this.handler.call(context);
  },

  /**
   * @api private
   */
  attach_http_event_listeners: function(context) {
    var self = this;
    var req = context;
    var headers, cipher, body;

    context.on('httpHeaders', function(err, response) {
      if ( err !== 200 ) return; // display error
      headers = response;

    });

    //context.on('success', function(err, res) {
    context.on('success', function(res) {
      //if ( err !== 200  ) return; // display error
      body = res.httpResponse.body;
      // decrypt cipher
      self.decryption_cipher(req, headers, function( err, response ) {
        if ( err ) return; // error
        cipher = response;
        // optionally authenticate cipher
        if ( headers['x-amz-meta-x-amz-unencrypted-content-length'] && (headers['content-length'] !== headers['x-amz-meta-x-amz-unencrypted-content-length']) ) {
          var auth = body.slice( headers['x-amz-meta-x-amz-unencrypted-content-length'] );
          body = body.slice( 0, headers['x-amz-meta-x-amz-unencrypted-content-length'] );
          cipher.setAuthTag( auth );
        }
        // decrypt text
        var text = self.decrypt_message(cipher, body);
        res.httpResponse.body = text;
        //res.httpResponse.decrypted = true;
        self.trigger('decrypted', res.httpResponse.body);
      });

    });

    context.on('error', function(err, res) {
      console.log(err);
      if ( res.httpResponse.body instanceof AWS.S3.Encryption.IODecrypter ) {
        res.httpResponse.body = res.httpResponse.body.finalize();
      }
    });
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
  },

  // - decryption
  decryption_cipher: function(req, res, callback) {
    var envelope = this.get_encryption_envelope(req, res);
    if ( envelope ) {
      // FIX: reset cipher_provider if not the right instance
      if ( (envelope['x-amz-wrap-alg'] == 'kms') && !( req['encryption']['cipher_provider'] instanceof AWS.S3.Encryption.KmsCipherProvider ) ) {
        var metadata = JSON.parse( envelope['x-amz-matdesc'] );
        req['encryption']['cipher_provider'] = req['encryption'].cipherProvider(metadata);
      }
      req['encryption']['cipher_provider'].decryption_cipher(envelope, callback);
    } else {
      //raise Errors::DecryptionError,
      var msg = 'unable to locate encyrption envelope';
      AWS.util.error(new Error(), {
        message: msg
      });
    }
  },

  get_encryption_envelope: function(req, res) {
    var metadata = ( typeof req['encryption']['envelope_location'] == 'undefined' );
    if ( metadata ) {
      return this.envelope_from_metadata(res) || this.envelope_from_instr_file(req);
    } else {
      return this.envelope_from_instr_file(req) || this.envelope_from_metadata(res);
    }
  },

  envelope_from_metadata: function( headers ) {
    var possible_envelope = {};
    for ( var i in POSSIBLE_ENVELOPE_KEYS ) {
      var suffix = POSSIBLE_ENVELOPE_KEYS[i];
      //var value = context.httpResponse.headers['x-amz-meta-'+ suffix];
      var value = headers['x-amz-meta-'+ suffix];
      if ( value ) {
        possible_envelope[suffix] = value;
      }
    }
    return this.extract_envelope(possible_envelope);
  },

  // NOT WORKING
  envelope_from_instr_file: function(context) {
    return null;
    suffix = context['encryption']['instruction_file_suffix'];
    context.client.getObject({
      bucket: context.params['bucket'],
      key: context.params['key'] + suffix
    }, function( err, response ) {
      possible_envelope = JSON.parse( response );
    });
    return this.extract_envelope(possible_envelope);
    //rescue S3::Errors::ServiceError, Json::ParseError
    AWS.util.error(new Error(), {
      message: 'Json::ParseError'
    });
    return null;
  },

  extract_envelope: function(hash) {
    if ( hash['x-amz-key'] ) return this.v1_envelope(hash);
    if ( hash['x-amz-key-v2'] ) return this.v2_envelope(hash);
    var keys = Object.keys(hash);
    if ( keys.match(/^x-amz-key-(.+)$/).length ) {
      var msg = 'unsupported envelope encryption version #{$1}';
      //raise Errors::DecryptionError, msg
      AWS.util.error(new Error(), {
        message: msg
      });
      return false;
    } else {
      // no envelope found
      return null;
    }
  },

  decrypt_message: function(cipher, body) {
    var IODecrypter = AWS.S3.Encryption.IODecrypter;
    var decrypter= new IODecrypter(cipher, body);
    var output = decrypter.finalize();
    //if( decrypter.io.respond_to?(:rewind) ) decrypter.io.rewind;  // what's this?
    //res.httpResponse = decrypter.io
    return output;
  },

  v1_envelope: function(envelope) {
    return envelope;
  },

  v2_envelope: function(envelope) {
    if ( POSSIBLE_ENCRYPTION_FORMATS.indexOf( envelope['x-amz-cek-alg'] ) == -1 ) {
      var alg = envelope['x-amz-cek-alg'].toString();
      var msg = 'unsupported content encrypting key (cek) format: '+ alg;
      //raise Errors::DecryptionError, msg
      AWS.util.error(new Error(), {
        message: msg
      });
      return null;
    }
    if ( envelope['x-amz-wrap-alg'] !== 'kms' ) {
      var alg = envelope['x-amz-wrap-alg'].toString();
      var msg = 'unsupported key wrapping algorithm: '+ alg;
      //raise Errors::DecryptionError, msg
      AWS.util.error(new Error(), {
        message: msg
      });
      return null;
    }

    var keys = Object.keys(envelope).sort();
    V2_ENVELOPE_KEYS = V2_ENVELOPE_KEYS.sort();
    var keys_match = (V2_ENVELOPE_KEYS.length == keys.length) && keys.every(function(element, index) {
        return element === V2_ENVELOPE_KEYS[index];
    });

    if ( !keys_match ) {
      var msg = 'incomplete v2 encryption envelope:\n';
      msg += '  expected: '+ V2_ENVELOPE_KEYS.join(',');
      msg += '  got: '+ keys.join(',');
      //raise Errors::DecryptionError, msg
      AWS.util.error(new Error(), {
        message: msg
      });
      return null;
    }

    return envelope;
  }

});


module.exports = AWS.S3.Encryption.DecryptHandler;
