const helpers = require('./helpers');
const AWS = helpers.AWS;
const MockService = helpers.MockService;
var getEndpointSuffix = require('../lib/region_config').getEndpointSuffix;

describe('region_config.js', function() {
  it('sets endpoint configuration option for default regions', function() {
    var service = new MockService;
    expect(service.isGlobalEndpoint).to.equal(false);
    expect(service.endpoint.host).to.equal('mockservice.mock-region.amazonaws.com');
  });

  [AWS.CloudFront, AWS.IAM, AWS.ImportExport, AWS.Route53].forEach(function(svcClass) {
    it('uses a global endpoint for ' + svcClass.serviceIdentifier, function() {
      var service = new svcClass;
      expect(service.endpoint.host).to.equal(service.serviceIdentifier + '.amazonaws.com');
      expect(service.isGlobalEndpoint).to.equal(true);
    });
  });

  [AWS.Route53].forEach(function(svcClass) {
    [
      'us-isof-south-1',
      'eu-isoe-west-1',
      'us-gov-west-1',
      'cn-northwest-1',
      'cn-north-1'
    ].forEach(function(region) {
      it('uses a global partition endpoint for ' + svcClass.serviceIdentifier, function() {
        var service = new svcClass({
          region: region
        });
        expect(service.endpoint.host).to.contain(service.serviceIdentifier + '.');
        expect(service.endpoint.host).not.to.contain(region);
        expect(service.isGlobalEndpoint).to.equal(true);
      });
    });
  });

  it('always enables SSL for Route53', function() {
    var service = new AWS.Route53;
    expect(service.config.sslEnabled).to.equal(true);
  });

  it('uses "global" endpoint for SimpleDB in us-east-1', function() {
    var service = new AWS.SimpleDB({
      region: 'us-east-1'
    });
    expect(service.isGlobalEndpoint).to.equal(false);
    expect(service.endpoint.host).to.equal('sdb.amazonaws.com');
  });

  it('uses "global" endpoint for SimpleDB in us-east-1', function() {
    var service = new AWS.S3({
      region: 'us-east-1'
    });
    expect(service.isGlobalEndpoint).to.equal(false);
    expect(service.endpoint.host).to.equal('s3.amazonaws.com');
  });

  it('uses "global" endpoint for IAM in cn-northwest-1', function() {
    var service = new AWS.IAM({
      region: 'cn-northwest-1'
    });
    expect(service.isGlobalEndpoint).to.equal(true);
    expect(service.signingRegion).to.equal('cn-north-1');
    expect(service.endpoint.host).to.equal('iam.cn-north-1.amazonaws.com.cn');
  });

  it('uses "global" endpoint for Cost Explorer in us-east-2', function() {
    var service = new AWS.CostExplorer({
      region: 'us-east-2'
    });
    expect(service.isGlobalEndpoint).to.equal(true);
    expect(service.signingRegion).to.equal('us-east-1');
    expect(service.endpoint.host).to.equal('ce.us-east-1.amazonaws.com');
  });

  it('uses "global" endpoint for Cost Explorer in cn-north-1', function() {
    var service = new AWS.CostExplorer({
      region: 'cn-north-1'
    });
    expect(service.isGlobalEndpoint).to.equal(true);
    expect(service.signingRegion).to.equal('cn-northwest-1');
    expect(service.endpoint.host).to.equal('ce.cn-northwest-1.amazonaws.com.cn');
  });

  [
    ['cn-north-1', 'cn-northwest-1', 'route53.amazonaws.com.cn'],
    ['us-gov-west-1', 'us-gov-west-1', 'route53.us-gov.amazonaws.com'],
    ['us-iso-west-1', 'us-iso-east-1', 'route53.c2s.ic.gov'],
    ['us-isob-west-1', 'us-isob-east-1', 'route53.sc2s.sgov.gov'],
  ].forEach(function([region, signingRegion, endpoint]) {
    it('uses "global" endpoint for Route53 in ' + region, function () {
      var service = new AWS.Route53({
        region
      });
      expect(service.isGlobalEndpoint).to.equal(true);
      expect(service.signingRegion).to.equal(signingRegion);
      expect(service.endpoint.host).to.equal(endpoint);
    });
  });

  it('enables signature version 4 signing in cn-*', function() {
    var service = new AWS.IAM({
      region: 'cn-north-1'
    });
    expect(service.config.signatureVersion).to.equal('v4');
  });

  it('does not use - as separator for S3 in public regions and GovCloud', function() {
    var service = new AWS.S3({
      region: 'us-west-2'
    });
    expect(service.isGlobalEndpoint).to.equal(false);
    expect(service.endpoint.host).to.equal('s3.us-west-2.amazonaws.com');
    service = new AWS.S3({
      region: 'us-gov-west-1'
    });
    expect(service.isGlobalEndpoint).to.equal(false);
    expect(service.endpoint.host).to.equal('s3.us-gov-west-1.amazonaws.com');
  });

  it('uses . as separator for S3 in cn-*', function() {
    var service = new AWS.S3({
      region: 'cn-north-1'
    });
    expect(service.isGlobalEndpoint).to.equal(false);
    expect(service.endpoint.host).to.equal('s3.cn-north-1.amazonaws.com.cn');
  });

  it('uses SigV4 and . for default regions', function() {
    var service = new AWS.S3({
      region: 'xx-west-1'
    });
    expect(service.isGlobalEndpoint).to.equal(false);
    expect(service.config.signatureVersion).to.equal('v4');
    expect(service.endpoint.host).to.equal('s3.xx-west-1.amazonaws.com');
  });

  it('uses us-gov endpoint for IAM in GovCloud', function() {
    var service = new AWS.IAM({
      region: 'us-gov-east-1'
    });
    expect(service.isGlobalEndpoint).to.equal(true);
    expect(service.signingRegion).to.equal('us-gov-west-1');
    expect(service.endpoint.host).to.equal('iam.us-gov.amazonaws.com');
  });

  it('uses us-gov-west-1 endpoint for STS in GovCloud', function() {
    var service = new AWS.STS({
      region: 'us-gov-west-1'
    });
    expect(service.isGlobalEndpoint).to.equal(false);
    expect(service.endpoint.host).to.equal('sts.us-gov-west-1.amazonaws.com');
  });

  it('resolves the endpoint suffix for eu-isoe-west-1', function() {
    expect(getEndpointSuffix('eu-isoe-west-1')).to.equal('cloud.adc-e.uk');
  });

  it('resolves the endpoint suffix for us-isof-south-1', function() {
    expect(getEndpointSuffix('us-isof-south-1')).to.equal('csp.hci.ic.gov');
  });
});

describe('region_config_data.json', function() {
  it('does not reference undefined patterns', function() {
    var config, k, ref, results, v;
    config = require('../lib/region_config_data.json');
    ref = config.rules;
    results = [];
    for (k in ref) {
      v = ref[k];
      if (typeof v === 'string') {
        results.push(expect(config.patterns).to.haveOwnProperty(v));
      } else {
        results.push(void 0);
      }
    }
    return results;
  });
});
