var helpers = require('../helpers');
var AWS = helpers.AWS;

describe('AWS.RDS.Signer', function() {
    describe('constructor', function() {
        it('can be instantiated without parameters', function() {
            var signer = new AWS.RDS.Signer();
            expect(signer instanceof AWS.RDS.Signer).to.equal(true);
        });

        it('can be instantiated with parameters', function() {
            var signer = new AWS.RDS.Signer({
                hostname: 'db.us-east-1.amazonaws.com',
                port: 8000
            });
            expect(signer instanceof AWS.RDS.Signer).to.equal(true);
        });
    });

    describe('getAuthToken', function() {
        var expectedToken = 'db.us-east-1.amazonaws.com:8000/?Action=connect&DBUser=test&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=akid%2F19700101%2Fus-east-1%2Frds-db%2Faws4_request&X-Amz-Date=19700101T000000Z&X-Amz-Expires=900&X-Amz-Signature=6f2b4daa29668c1c264d7af7927d9d2a706768e35d92d76b461aedbaca14b6ad&X-Amz-SignedHeaders=host';
        var testOptions = {
            hostname: 'db.us-east-1.amazonaws.com',
            port: 8000,
            region: 'us-east-1',
            username: 'test'
        };
        var requiredOptions = Object.keys(testOptions);
        var rdsSigner = new AWS.RDS.Signer();
        beforeEach(function() {
            helpers.spyOn(AWS.Service.prototype, 'getSkewCorrectedDate').andReturn(new Date(0));
        });
        requiredOptions.forEach(function(field) {
            it('will error if ' + field + 'is not accessible', function() {
                var options = AWS.util.copy(testOptions);
                delete options[field];
                var didError = false;
                try {
                    var token = rdsSigner.getAuthToken(options);
                } catch (err) {
                    didError = true;
                }
                expect(didError).to.equal(true);
            });
        });

        it('will not error if all fields are accessible with credentials', function() {
            var didError = false;
            try {
                var token = rdsSigner.getAuthToken(testOptions);
            } catch (err) {
                didError = true;
            }
            expect(didError).to.equal(false);
            expect(typeof token).to.equal('string');
        });

        it('allows passing credentials', function() {
            var didError = false;
            var options = AWS.util.merge(testOptions, {
                credentials: {
                    accessKeyId: 'akid',
                    secretAccessKey: 'secret'
                }
            });
            try {
                var token = rdsSigner.getAuthToken(options);
            } catch (err) {
                didError = true;
            }
            expect(didError).to.equal(false);
            expect(token).to.equal(expectedToken);
        });

        it('will use options passed into the constructor when needed', function() {
            var didError = false;
            var signer = new AWS.RDS.Signer({
                username: 'test',
                credentials: {
                    accessKeyId: 'akid',
                    secretAccessKey: 'secret'
                }
            });
            try {
                // everything except username
                var token = signer.getAuthToken({
                    hostname: 'db.us-east-1.amazonaws.com',
                    port: 8000,
                    region: 'us-east-1'
                });
            } catch (err) {
                didError = true;
            }
            expect(didError).to.equal(false);
            expect(token).to.equal(expectedToken);
        });

        it('does not require options if they are all passed to constructor', function() {
            var didError = false;
            var signer = new AWS.RDS.Signer({
                username: 'test',
                credentials: {
                    accessKeyId: 'akid',
                    secretAccessKey: 'secret'
                },
                hostname: 'db.us-east-1.amazonaws.com',
                port: 8000,
                region: 'us-east-1'
            });
            try {
                // everything except username
                var token = signer.getAuthToken();
            } catch (err) {
                didError = true;
            }
            expect(didError).to.equal(false);
            expect(token).to.equal(expectedToken);
        });

        describe('can asynchronously', function() {

            it('handle errors', function(done) {
                var signer = new AWS.RDS.Signer({
                    hostname: 'db.us-east-1.amazonaws.com',
                    port: 8000,
                    username: 'test',
                    credentials: {
                        accessKeyId: 'akid',
                        secretAccessKey: 'secret'
                    }
                });
                signer.getAuthToken({}, function(err, token) {
                    expect(err).not.to.equal(null);
                    expect(typeof token).not.to.equal('string');
                    done();
                });
            });

            it('handle erroring credential provider', function(done) {
                var signer = new AWS.RDS.Signer({
                    hostname: 'db.us-east-1.amazonaws.com',
                    port: 8000,
                    region: 'us-east-1',
                    username: 'test',
                    credentials: new AWS.CognitoIdentityCredentials({
                        IdentityPoolId: 'eu-central-1:0',
                        Logins: []
                    })
                });
                signer.getAuthToken({}, function(err, token) {
                    expect(err).not.to.equal(null);
                    expect(typeof token).not.to.equal('string');
                    done();
                });
            });

            it('generate a token', function(done) {
                var signer = new AWS.RDS.Signer({
                    hostname: 'db.us-east-1.amazonaws.com',
                    port: 8000,
                    region: 'us-east-1',
                    username: 'test',
                    credentials: {
                        accessKeyId: 'akid',
                        secretAccessKey: 'secret'
                    }
                });
                signer.getAuthToken({}, function(err, token) {
                    expect(err).to.equal(null);
                    expect(token).to.equal(expectedToken);
                    done();
                });
            });

            it('generate a token without options (when specified in constructor)', function(done) {
                var signer = new AWS.RDS.Signer({
                    hostname: 'db.us-east-1.amazonaws.com',
                    port: 8000,
                    region: 'us-east-1',
                    username: 'test',
                    credentials: {
                        accessKeyId: 'akid',
                        secretAccessKey: 'secret'
                    }
                });
                signer.getAuthToken(function(err, token) {
                    expect(err).to.equal(null);
                    expect(token).to.equal(expectedToken);
                    done();
                });
            });
        });

    });
});
