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
        355,
        357,
        370,
        376,
        748,
        746,
        867,
        880,
        878,
        879,
        885
    ]
};

module.exports = {
    whitelist: whitelist
};
