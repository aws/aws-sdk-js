var helpers = require('../helpers');

var AWS = helpers.AWS;

var url = require('url');

var keyPairId = 'not-a-real-key';

var privateKey = '-----BEGIN RSA PRIVATE KEY-----\nMIIEogIBAAKCAQEAgcmOyp7sbLRilD/Wc8F5S7VpSMiFcn3q32wsYlnMJOm53Tr5D3CjaCdv\nd7Xz29NyFdN6U+5rxl/TeXVbWuM6BmSRxTvR/tVoIWMF91G7h/+TfNN5otqPDIrvN7UjXOYq\nHeOp3wFZXEgztn+1UowfHldGGL1X9m71f8CUFhFjuVfFajzyBFcStMBSC7My1KRRtElLE4CI\nYiWTVQSqK5TM5Qnnbq7c1AnQNqVH9Cb6mv4JgzBshDvkFRFoa15CKPWySqHM2j0D1+PWHUr+\nNBIyKJLZTXP21m8YNZ4DtflC03SjB+lmepSgMJB1kckJ3e2IkLTLwrHhrdPErIt3IqActQID\nAQABAoIBADwH53UO5xosoUAi+uVVwu3ivgz9OsRHO6EV3r2q/ULBnMeYJGUg22QsgWFklqPB\n/I3d4EH8EHuUDTOrtZKncUpNsCMDVVFCkkSHEdZgRpZT/3sIMcXCw9GwXY9tyCqLB0YF7KeK\nbzPA7bJnBY5l42rcQT7mLU596i2p/JTsfCzYpHsLjc+X61cp11ON57s0bRNky4vz0ZPKnM2L\nKanN1VxwcyGQjCawCePvYSt4Loa4Z2uQxK3nJKWG1UhYQKbsSTuN9+0aIrcF1yUuo0A0F7+u\nT0qfRQnUvQQxPxbVlDmdQXgjXUtNOVBZqgOew04SCYHxGOFJp5AAXyCNpKCxTQECgYEAup2C\n/VpAlKeliCJ+L3vS0kLQURneb+8O8XvYikTRRXRU4KtwEXY9J80W5Yeex35cV2j25LQdIpla\nd7nrsOAo1/RUbrZp43rUv7NwlTJszNRRDVr6DfSXQGHU6kRhmOMxUxfb42pJXrLDCNYQIjGK\nPrnAVmIjI0lfzRBiRQr11XUCgYEAsgsGyHpOnId/7K9fS7809pkxCDlvCie0au+pivhgVqqz\nur9DCUsQ+7dZ7ijs0Olgz1TkYBKRkofWgGmVJpYBxxvTZ/6y8XdCgCoToZ/hnFOJ5vbJd2/K\n1I0Wn8f7Pa13MvEimr8y1eLQ4DGnOtFop5ttigXCLSeFcp+tEyEiAkECgYAR9vnWM+sFpIHt\n8gwdvBjWfvIY7JmaQvQ4UQjOfsN6oTFOk5JtS+mlPDwZCo5BfCudipBCAgjP/N1Vq0NCOsIT\n0ASUx+C3smpqrfaHllwc9895rqll0IcC/qgFiWGv2yczbZeQc/nuMN1Pq3PQJt69HRqj9jyV\nuAmN7ybWqLBzxQKBgCPFQVyf7hFWy+XSqjO+u7ZbutUrLNr+dSoS8p5AHqLq8ucvLBm+4i+g\ne8n0oPesG84sASIoOOUWs4rjK5swAjVtqsC3FF6dFlhHm+AaDirpQciMhpefd0HTAtuhQyH2\nKv+qIMi0Z1M/mbWhZDbWAc/C03QqigOmcBJCcHRqcLnBAoGAGF6aaSoY2/gcwgu5R72D+1jy\nk/xcfSd+YmBtEb70FfpqOOmLr61T1X0coeQrc/nMNhGBehFJKtO1iwNW8KJmKUoCUvdJ8FcY\n45dFLuuwdR64ZcguIbxdeIS9ZcbqkJG8g+a0UYqC017uUdfad1LE+kwQEKDCOxiGtYVFQvJv\naZg=\n-----END RSA PRIVATE KEY-----\n';

var customPolicy = JSON.stringify({
  Statement: [
    {
      Resource: 'https://example-distribution.cloudfront.net/a/protected/file.ext',
      Condition: {
        DateLessThan: {
          'AWS:EpochTime': (new Date(2020, 11, 11)).valueOf() / 1000
        },
        DateGreaterThan: {
          'AWS:EpochTime': (new Date(2015, 11, 11)).valueOf() / 1000
        },
        IpAddress: {
          'AWS:SourceIp': '127.0.0.1/32'
        }
      }
    }
  ]
});

describe('AWS.CloudFront.Signer', function() {
  it('can generate signed URLs with a canned policy', function() {
    var opts, query, signedUrl, signer;
    if (AWS.util.isNode()) {
      signer = new AWS.CloudFront.Signer(keyPairId, privateKey);
      opts = {
        url: 'https://example-distribution.cloudfront.net/a/protected/file.ext',
        expires: (new Date(2020, 11, 11)).valueOf() / 1000
      };
      signedUrl = signer.getSignedUrl(opts);
      query = url.parse(signedUrl, true).query;
      expect(query).to.include.keys('Expires');
      expect(query).to.include.keys('Signature');
      return expect(query).to.include.keys('Key-Pair-Id');
    }
  });

  it('can generate signed URLs with a custom policy', function() {
    if (AWS.util.isNode()) {
      var signer = new AWS.CloudFront.Signer(keyPairId, privateKey);
      var opts = {
        url: 'https://example-distribution.cloudfront.net/a/protected/file.ext',
        policy: customPolicy
      };
      var signedUrl = signer.getSignedUrl(opts);
      var query = url.parse(signedUrl, true).query;
      expect(query).to.include.keys('Policy');
      expect(query).to.include.keys('Signature');
      expect(query).to.include.keys('Key-Pair-Id');
    }
  });

  it('can generate signed cookies with a canned policy', function() {
    if (AWS.util.isNode()) {
      var signer = new AWS.CloudFront.Signer(keyPairId, privateKey);
      var opts = {
        url: 'https://example-distribution.cloudfront.net/a/protected/file.ext',
        expires: (new Date(2020, 11, 11)).valueOf() / 1000
      };
      var cookieHash = signer.getSignedCookie(opts);
      expect(cookieHash).to.include.keys('CloudFront-Expires');
      expect(cookieHash).to.include.keys('CloudFront-Signature');
      expect(cookieHash).to.include.keys('CloudFront-Key-Pair-Id');
    }
  });

  it('can generate signed cookies with a custom policy', function() {
    if (AWS.util.isNode()) {
      var signer = new AWS.CloudFront.Signer(keyPairId, privateKey);
      var opts = { policy: customPolicy };
      var cookieHash = signer.getSignedCookie(opts);
      expect(cookieHash).to.include.keys('CloudFront-Policy');
      expect(cookieHash).to.include.keys('CloudFront-Signature');
      expect(cookieHash).to.include.keys('CloudFront-Key-Pair-Id');
    }
  });
});
