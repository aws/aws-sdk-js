var AWS = require('../../core');

//AWS.S3.Encryption.Errors =
AWS.S3.Encryption.Errors = AWS.util.update({

  DecryptionError: AWS.util.error,

  EncryptionError: AWS.util.error

});

module.exports = AWS.S3.Encryption.Errors;
