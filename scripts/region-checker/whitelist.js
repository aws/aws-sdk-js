var whitelist = {
    '/config.js': [
        24,
        25,
        85,
        86,
        193,
        247,
        248
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
        69,
        70,
        194,
        196,
        209,
        215,
        545,
        546,
        547,
        666,
        677,
        678,
        684,
        679
    ]
};

module.exports = {
    whitelist: whitelist
};
