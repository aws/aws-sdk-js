var whitelist = {
    '/config.js': [
        24,
        25,
        187
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
        68,
        69,
        515,
        517,
        516,
        636,
        647,
        648,
        649,
        654
    ]
};

module.exports = {
    whitelist: whitelist
};
