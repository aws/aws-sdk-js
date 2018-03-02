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
        507,
        509,
        628,
        639,
        640,
        641,
        646
    ]
};

module.exports = {
    whitelist: whitelist
};