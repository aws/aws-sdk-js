var helpers = require('../helpers'),
  v4Credentials = require('../../lib/signers/v4_credentials'),
  AWS = require('../../index'),
  credentials = {accessKeyId: 'foo', secretAccessKey: 'bar'},
  date = '19700101',
  region = 'us-foo-1',
  service = 'bar',
  maxCacheEntries = 50,
  hmacsOnCacheHit = 1,
  hmacsOnCacheMiss = 5;

describe('v4_credentials', function() {
  describe('#createScope', function() {
    it(
      'should concatenate the provided date, region, service name, and a v4 identifier',
      function() {
        var scope = v4Credentials.createScope(date, region, service);
        expect(scope).to.equal(date + '/' + region + '/' + service + '/aws4_request');
      }
    );
  });

  describe('#getSigningKey', function() {
    it(
      'should return a buffer containing a signing key derived from the'
        + ' provided credentials, date, region, and service',
      function () {
        var signingKey = v4Credentials.getSigningKey(
          credentials,
          date,
          region,
          service,
          false
        );
        expect(signingKey.toString('hex')).to
          .equal('b7c34d23320b5cd909500c889eac033a33c93f5a4bf67f71988a58f299e62e0a');
      }
    );
  });

  describe('caching', function() {
    var calls = null;

    beforeEach(function() {
      v4Credentials.emptyCache();
      helpers.spyOn(AWS.util.crypto, 'hmac');
      calls = AWS.util.crypto.hmac.calls;
    });

    it('will cache a maximum of 50 derived credentials', function() {
      for (var i = 0; i < maxCacheEntries; i++) {
        v4Credentials.getSigningKey(
          credentials,
          date,
          region,
          service + '_' + i.toString(16)
        );
      }

      // Deriving a key involves calculating 4 HMAC values
      expect(AWS.util.crypto.hmac.calls.length).to
        .equal(maxCacheEntries * hmacsOnCacheMiss);

      // Get the signing key that should be in cache
      v4Credentials.getSigningKey(credentials, date, region, service + '_0');
      // AWS.util.crypto.hmac should not have been called again
      expect(AWS.util.crypto.hmac.calls.length).to
        .equal(maxCacheEntries * hmacsOnCacheMiss + hmacsOnCacheHit);

      // Derive a key that would not be in cache
      v4Credentials.getSigningKey(
        credentials,
        date,
        region,
        service + '_' + maxCacheEntries.toString(16)
      );
      // AWS.util.crypto.hmac should have been called 4 additional times
      expect(AWS.util.crypto.hmac.calls.length).to
        .equal((maxCacheEntries + 1) * hmacsOnCacheMiss + hmacsOnCacheHit);

      // The first signing key should have been evicted from cache
      v4Credentials.getSigningKey(credentials, date, region, service + '_0');
      // AWS.util.crypto.hmac should have been called 4 additional times
      expect(AWS.util.crypto.hmac.calls.length).to
        .equal((maxCacheEntries + 2) * hmacsOnCacheMiss + hmacsOnCacheHit);
    });

    it('should cache subsequent requests', function() {
      expect(AWS.util.crypto.hmac.calls.length).to.equal(0);
      v4Credentials.getSigningKey(credentials, date, region, service);
      expect(AWS.util.crypto.hmac.calls.length).to.equal(hmacsOnCacheMiss);
      v4Credentials.getSigningKey(credentials, date, region, service);
      expect(AWS.util.crypto.hmac.calls.length).to
        .equal(hmacsOnCacheMiss + hmacsOnCacheHit);
      v4Credentials.getSigningKey(credentials, date, region, service);
      expect(AWS.util.crypto.hmac.calls.length).to
        .equal(hmacsOnCacheMiss + hmacsOnCacheHit * 2);
    });

    it('should bypass cache when requested', function() {
      expect(AWS.util.crypto.hmac.calls.length).to.equal(0);
      v4Credentials.getSigningKey(credentials, date, region, service);
      expect(AWS.util.crypto.hmac.calls.length).to.equal(hmacsOnCacheMiss);
      v4Credentials.getSigningKey(credentials, date, region, service);
      expect(AWS.util.crypto.hmac.calls.length).to
        .equal(hmacsOnCacheMiss + hmacsOnCacheHit);
      v4Credentials.getSigningKey(credentials, date, region, service, false);
      expect(AWS.util.crypto.hmac.calls.length).to
        .equal(hmacsOnCacheMiss * 2 + hmacsOnCacheHit);
    });

    it('should include the provided date in the cache key', function() {
      expect(AWS.util.crypto.hmac.calls.length).to.equal(0);
      v4Credentials.getSigningKey(credentials, date, region, service);
      expect(AWS.util.crypto.hmac.calls.length).to.equal(hmacsOnCacheMiss);
      v4Credentials.getSigningKey(credentials, '20170207', region, service);
      expect(AWS.util.crypto.hmac.calls.length).to.equal(hmacsOnCacheMiss * 2);
    });

    it('should include the provided region in the cache key', function() {
      expect(AWS.util.crypto.hmac.calls.length).to.equal(0);
      v4Credentials.getSigningKey(credentials, date, region, service);
      expect(AWS.util.crypto.hmac.calls.length).to.equal(hmacsOnCacheMiss);
      v4Credentials.getSigningKey(credentials, date, region + 'foo', service);
      expect(AWS.util.crypto.hmac.calls.length).to.equal(hmacsOnCacheMiss * 2);
    });

    it('should include the provided service in the cache key', function() {
      expect(AWS.util.crypto.hmac.calls.length).to.equal(0);
      v4Credentials.getSigningKey(credentials, date, region, service);
      expect(AWS.util.crypto.hmac.calls.length).to.equal(hmacsOnCacheMiss);
      v4Credentials.getSigningKey(credentials, date, region, service + 'foo');
      expect(AWS.util.crypto.hmac.calls.length).to.equal(hmacsOnCacheMiss * 2);
    });
  });
});
