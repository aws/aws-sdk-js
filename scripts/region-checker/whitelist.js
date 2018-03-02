var whitelist = {
    '/config.js': [
        25,
        26,
        171
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
        42,
        43,
        96,
        98,
        109,
        111
    ],
    '/request.js': [
        315,
        316
    ],
    '/services/s3.js': [
        68,
        69,
        570,
        572,
        691,
        702,
        703,
        704,
        709
    ]
};

module.exports = {
    whitelist: whitelist
};
