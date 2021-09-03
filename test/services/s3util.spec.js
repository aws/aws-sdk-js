var helpers = require('../helpers');
var s3util = require('../../lib/services/s3util');

describe('dnsCompatibleBucketName', function() {
  it('must be at least 3 characters', function() {
    expect(s3util.dnsCompatibleBucketName('aa')).to.equal(false);
  });

  it('must not be longer than 63 characters', function() {
    var b;
    b = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
    expect(s3util.dnsCompatibleBucketName(b)).to.equal(false);
  });

  it('must start with a lower-cased letter or number', function() {
    expect(s3util.dnsCompatibleBucketName('Abc')).to.equal(false);
    expect(s3util.dnsCompatibleBucketName('-bc')).to.equal(false);
  });

  it('must end with a lower-cased letter or number', function() {
    expect(s3util.dnsCompatibleBucketName('abC')).to.equal(false);
    expect(s3util.dnsCompatibleBucketName('ab-')).to.equal(false);
    expect(s3util.dnsCompatibleBucketName('abc')).to.equal(true);
  });

  it('may not contain multiple contiguous dots', function() {
    expect(s3util.dnsCompatibleBucketName('abc.123')).to.equal(true);
    expect(s3util.dnsCompatibleBucketName('abc..123')).to.equal(false);
  });

  it('may only contain letters numbers and dots', function() {
    expect(s3util.dnsCompatibleBucketName('abc123')).to.equal(true);
    expect(s3util.dnsCompatibleBucketName('abc_123')).to.equal(false);
  });

  it('must not look like an ip address', function() {
    expect(s3util.dnsCompatibleBucketName('1.2.3.4')).to.equal(false);
    expect(s3util.dnsCompatibleBucketName('a.b.c.d')).to.equal(true);
  });
});
