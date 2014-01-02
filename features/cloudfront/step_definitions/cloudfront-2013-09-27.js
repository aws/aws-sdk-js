module.exports = function() {
  var createParams = {
    CallerReference: '',
    Aliases: {
      Quantity: 0
    },
    DefaultRootObject: '',
    Origins: {
      Items: [{
        Id: 'origin',
        DomainName: 'example.com',
        CustomOriginConfig: {
          HTTPPort: 80,
          HTTPSPort: 443,
          OriginProtocolPolicy: 'match-viewer'
        }
      }],
      Quantity: 1,
    },
    DefaultCacheBehavior: {
      TargetOriginId: 'origin',
      ForwardedValues: {
        QueryString: false,
        Cookies: { Forward: 'all' }
      },
      TrustedSigners: {
        Items: [],
        Enabled: false,
        Quantity: 0
      },
      ViewerProtocolPolicy: 'allow-all',
      MinTTL: 0
    },
    CacheBehaviors: {
      Items: [],
      Quantity: 0
    },
    Comment: '',
    Logging: {
      Enabled: false,
      Bucket: 'invalidbucket.s3.amazonaws.com',
      Prefix: 'prefix',
      IncludeCookies: false
    },
    PriceClass: 'PriceClass_All',
    Enabled: false
  };

  this.Before("@cloudfront-2013-09-27", function (callback) {
    this.service = new this.AWS.CloudFront({apiVersion: '2013-09-27'});
    this.cfCreateParams = createParams;
    callback();
  });
};
