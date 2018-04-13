var whitelist = {
    '/config.js': [
        24,
        25,
        165
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
        544,
        546,
        665,
        676,
        677,
        678,
        683
    ]
};

module.exports = {
    whitelist: whitelist
};
