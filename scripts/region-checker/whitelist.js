var whitelist = {
    '/config.js': [
        24,
        25,
        85,
        86,
        197,
        251,
        252
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
        351,
        353,
        366,
        372,
        741,
        743,
        862,
        873,
        874,
        875,
        880
    ]
};

module.exports = {
    whitelist: whitelist
};
