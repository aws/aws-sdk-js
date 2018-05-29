var testCases = require('./virtual-host.fixture').testCases;
var S3 = require('../../clients/s3');

function getConfiguration(testCase) {
    var configuration = {
        region: testCase.Region,
        useDualstack: testCase.UseDualstack,
        useAccelerateEndpoint: testCase.UseS3Accelerate,
        s3ForcePathStyle: testCase.ConfiguredAddressingStyle === 'path'
    };

    return configuration;
}

function generateUri(httpRequest) {
    var endpoint = httpRequest.endpoint;
    var generatedEndpoint = endpoint.protocol + '//' + endpoint.hostname;
    if (httpRequest.path !== '/') {
        generatedEndpoint += httpRequest.path;
    }
    return generatedEndpoint;
}

describe('S3 Virtual Hosted-Style Addressing', function() {
    for (var i = 0; i < testCases.length; i++) {
        var testCase = testCases[i];

        (function(index, testCase) {
            it('test ' + (index + 1) + ' generates endpoint ' + testCase.ExpectedUri, function() {
                var config = getConfiguration(testCase);
                var s3 = new S3(config);
                var bucket = testCase.Bucket;
                var request = s3.listObjects({Bucket: bucket});

                request.emit('build');
                var httpRequest = request.httpRequest;
                var generatedEndpoint = generateUri(httpRequest);
                expect(generatedEndpoint).to.equal(testCase.ExpectedUri);
            });
        })(i, testCase);
    }
});


