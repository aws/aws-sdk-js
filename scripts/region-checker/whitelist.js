var whitelist = {
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
        315,
        316
    ],
    '/services/s3.js': [
        70,
        71,
        356,
        358,
        371,
        377,
        761,
        763,
        882,
        893,
        894,
        895,
        900
    ]
};

module.exports = {
    whitelist: whitelist
};
