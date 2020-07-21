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
        363,
        365,
        378,
        384,
        768,
        770,
        889,
        900,
        901,
        902,
        907
    ]
};

module.exports = {
    allowlist: allowlist
};
