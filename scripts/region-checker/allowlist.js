var allowlist = {
    '/config.js': [
        24,
        25,
        85,
        86,
        201,
        255,
        256
    ],
    '/credentials/cognito_identity_credentials.js': [
        78,
        79,
        109
    ],
    '/credentials/shared_ini_file_credentials.js': [
        4,
    ],
    '/http.js': [
        5
    ],
    '/rds/signer.js': [
        43,
        44,
        97,
        99,
        110,
        112
    ],
    '/request.js': [
        319
    ],
    '/services/s3.js': [
        70,
        71,
        362,
        364,
        377,
        383,
        767,
        769,
        888,
        899,
        900,
        901,
        906
    ]
};

module.exports = {
    allowlist: allowlist
};
