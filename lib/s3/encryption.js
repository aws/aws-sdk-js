var AWS = require('../core');

AWS.S3.Encryption = AWS.util.inherit({
});

/* sub-modules */
require('./encryption/client');
require('./encryption/decrypt_handler');
require('./encryption/default_cipher_provider');
require('./encryption/key_provider');
require('./encryption/default_key_provider');
require('./encryption/encrypt_handler');
require('./encryption/errors');
require('./encryption/io_decrypter');
require('./encryption/io_encrypter');
require('./encryption/kms_cipher_provider');
require('./encryption/materials');
require('./encryption/utils');

module.exports = AWS.S3.Encryption;
