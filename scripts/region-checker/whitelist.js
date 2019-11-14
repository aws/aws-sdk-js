var whitelist = {
    '/config.js': [
        24,
        25,
        86,
        192,
        246
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
        207,
        210,
        540,
        542,
        661,
        672,
        673,
        674,
        679
    ]
};

module.exports = {
    whitelist: whitelist
};
