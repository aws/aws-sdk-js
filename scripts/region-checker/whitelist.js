var whitelist = {
    '/config.js': [
        24,
        25,
        180
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
        510,
        513,
        515,
        634,
        645,
        646,
        647,
        652
    ]
};

module.exports = {
    whitelist: whitelist
};