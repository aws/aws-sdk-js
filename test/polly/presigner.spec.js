var helpers = require('../helpers');
var AWS = helpers.AWS;

describe('AWS.Polly.Presigner', function() {
  describe('constructor', function() {

    it('can use global config if no options are provided', function() {
      // save global region
      var region = AWS.config.region;
      AWS.config.update({
        region: 'us-east-2'
      });
      var presigner = new AWS.Polly.Presigner();
      // revert global region
      AWS.config.update({
        region: region
      });
      var serviceConfig = presigner.service.config;
        expect(serviceConfig.region).to.equal('us-east-2');
      });

    it('can be passed service options', function() {
      var presigner = new AWS.Polly.Presigner({
        region: 'us-west-2',
        credentials: {
          accessKeyId: 'akid',
          secretAccessKey: 'secret'
        },
        apiVersion: '2016-06-10'
      });
      var serviceConfig = presigner.service.config;
      expect(serviceConfig.region).to.equal('us-west-2');
      expect(serviceConfig.apiVersion).to.equal('2016-06-10');
      expect(serviceConfig.credentials).to.eql({
        accessKeyId: 'akid',
        secretAccessKey: 'secret'
      });
    });

    it('can be passed a service object', function() {
      var polly = new AWS.Polly({
        region: 'us-west-1',
        apiVersion: '2016-06-10'
      });
      var presigner = new AWS.Polly.Presigner({
        service: polly
      });
      var serviceConfig = presigner.service.config;
      expect(serviceConfig.region).to.equal('us-west-1');
      expect(serviceConfig.apiVersion).to.equal('2016-06-10');
    });

    it('will allow overriding service-bound params with own params', function() {
      var polly = new AWS.Polly({
        region: 'us-west-1',
        apiVersion: '2016-06-10',
        params: {
          foo: 'bar',
          goo: 'car'
        }
      });
      var presigner = new AWS.Polly.Presigner({
        service: polly,
        params: {
          foo: 'baz'
        }
      });
      var serviceConfig = presigner.service.config;
      expect(serviceConfig.region).to.equal('us-west-1');
      expect(serviceConfig.apiVersion).to.equal('2016-06-10');
      expect(serviceConfig.params).to.eql({
        foo: 'baz',
        goo: 'car'
      });
    });
  });

  describe('getSynthesizeSpeechUrl', function() {
    var presigner = new AWS.Polly.Presigner({
      region: 'us-west-2',
      credentials: {
        accessKeyId: 'akid',
        secretAccessKey: 'secret'
      }
    });
    beforeEach(function() {
      helpers.spyOn(presigner.service, 'getSkewCorrectedDate').andReturn(new Date(0));
    });

    describe('generates a url with', function() {
      var presigner = null;

      beforeEach(function() {
        presigner = new AWS.Polly.Presigner({
          region: 'us-west-2',
          credentials: {
            accessKeyId: 'akid',
            secretAccessKey: 'secret'
          }
        });
        helpers.spyOn(presigner.service, 'getSkewCorrectedDate').andReturn(new Date(0));
      });

      it('plain text', function() {
        var expectedUrl = 'https://polly.us-west-2.amazonaws.com/v1/speech?OutputFormat=mp3&Text=Hello%20world&TextType=text&VoiceId=fake&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=akid%2F19700101%2Fus-west-2%2Fpolly%2Faws4_request&X-Amz-Date=19700101T000000Z&X-Amz-Expires=3600&X-Amz-Signature=ad22388e7298c19a491bc77b0c1fd8f169de31f031497a0266a15e1379520ff8&X-Amz-SignedHeaders=host';
        var url = presigner.getSynthesizeSpeechUrl({
          TextType: 'text',
          OutputFormat: 'mp3',
          VoiceId: 'fake',
          Text: 'Hello world'
        });
        expect(url).to.equal(expectedUrl);
      });

      it('utf8 text', function() {
        var expectedUrl = 'https://polly.us-west-2.amazonaws.com/v1/speech?OutputFormat=mp3&Text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%20%D0%BC%D0%B8%D1%80&TextType=text&VoiceId=fake&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=akid%2F19700101%2Fus-west-2%2Fpolly%2Faws4_request&X-Amz-Date=19700101T000000Z&X-Amz-Expires=3600&X-Amz-Signature=5f51ccd04a9d8c0dac5687553208b4409fd885ffde1354dce38c93251762ab86&X-Amz-SignedHeaders=host';
        var url = presigner.getSynthesizeSpeechUrl({
          TextType: 'text',
          OutputFormat: 'mp3',
          VoiceId: 'fake',
          Text: 'Привет мир'
        });
        expect(url).to.equal(expectedUrl);
      });

      it('ssml text', function() {
        var expectedUrl = 'https://polly.us-west-2.amazonaws.com/v1/speech?OutputFormat=mp3&Text=%3Cspeak%20version%3D%221.1%22%20xml%3Alang%3D%22en-US%22%3E%0AHello%20%3Cbreak%20time%3D%220.8s%22%2F%3E%20world.%0A%3C%2Fspeak%3E&TextType=ssml&VoiceId=fake&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=akid%2F19700101%2Fus-west-2%2Fpolly%2Faws4_request&X-Amz-Date=19700101T000000Z&X-Amz-Expires=3600&X-Amz-Signature=e301897a5bb5f085fa8dfa303b0afdb0ff42542f2796d970f0867a6e3a2903c6&X-Amz-SignedHeaders=host';
        var ssml = [
          '<speak version="1.1" xml:lang="en-US">',
          'Hello <break time="0.8s"/> world.',
          '</speak>'
        ].join('\n');
        var url = presigner.getSynthesizeSpeechUrl({
          TextType: 'ssml',
          OutputFormat: 'mp3',
          VoiceId: 'fake',
          Text: ssml
        });
        expect(url).to.equal(expectedUrl);
      });

      it('multiple lexicon names', function() {
        var expectedUrl = 'https://polly.us-west-2.amazonaws.com/v1/speech?LexiconNames=bar&LexiconNames=foo&OutputFormat=mp3&Text=Hello%20world&TextType=text&VoiceId=fake&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=akid%2F19700101%2Fus-west-2%2Fpolly%2Faws4_request&X-Amz-Date=19700101T000000Z&X-Amz-Expires=3600&X-Amz-Signature=93919e22093e449a0a970cd3789098a1e4f2b46f9ae4a527f511c5f99db8d23f&X-Amz-SignedHeaders=host';
        var url = presigner.getSynthesizeSpeechUrl({
          TextType: 'text',
          OutputFormat: 'mp3',
          VoiceId: 'fake',
          Text: 'Hello world',
          LexiconNames: ['foo', 'bar']
        });
        expect(url).to.equal(expectedUrl);
      });

      it('service-bound params', function() {
        var presigner = new AWS.Polly.Presigner({
            region: 'us-west-2',
            credentials: {
              accessKeyId: 'akid',
              secretAccessKey: 'secret'
            },
            params: {
              TextType: 'text',
              OutputFormat: 'mp3',
              VoiceId: 'fake'
            }
        });
        helpers.spyOn(presigner.service, 'getSkewCorrectedDate').andReturn(new Date(0));
        var expectedUrl = 'https://polly.us-west-2.amazonaws.com/v1/speech?OutputFormat=mp3&Text=Hello%20world&TextType=text&VoiceId=fake&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=akid%2F19700101%2Fus-west-2%2Fpolly%2Faws4_request&X-Amz-Date=19700101T000000Z&X-Amz-Expires=3600&X-Amz-Signature=ad22388e7298c19a491bc77b0c1fd8f169de31f031497a0266a15e1379520ff8&X-Amz-SignedHeaders=host';
        var url = presigner.getSynthesizeSpeechUrl({
          Text: 'Hello world'
        });
        expect(url).to.equal(expectedUrl);
      });
    });

    function getExpiryFromUrl(url) {
      var parsedUrl = AWS.util.url.parse(url);
      var qs = parsedUrl.query;
      var matches = qs.match(/X-Amz-Expires=([\d]+)/);
      if (matches) {
          return parseInt(matches[1], 10);
      } else {
          return null;
      }
    }

    it('uses default expires if none is provided', function() {
      var url = presigner.getSynthesizeSpeechUrl({
        TextType: 'text',
        OutputFormat: 'mp3',
        VoiceId: 'fake',
        Text: 'Hello world'
      });
      var expires = getExpiryFromUrl(url);
      // 3600 seconds is the default value
      expect(expires).to.equal(3600);
    });

    it('prefers provided expires', function() {
      var url = presigner.getSynthesizeSpeechUrl({
        TextType: 'text',
        OutputFormat: 'mp3',
        VoiceId: 'fake',
        Text: 'Hello world'
      }, 900);
      var expires = getExpiryFromUrl(url);
      expect(expires).to.equal(900);
    });

    it('supports being called with a callback with expires', function(done) {
      var expectedUrl = 'https://polly.us-west-2.amazonaws.com/v1/speech?OutputFormat=mp3&Text=Hello%20world&TextType=text&VoiceId=fake&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=akid%2F19700101%2Fus-west-2%2Fpolly%2Faws4_request&X-Amz-Date=19700101T000000Z&X-Amz-Expires=3600&X-Amz-Signature=ad22388e7298c19a491bc77b0c1fd8f169de31f031497a0266a15e1379520ff8&X-Amz-SignedHeaders=host';
      presigner.getSynthesizeSpeechUrl({
        TextType: 'text',
        OutputFormat: 'mp3',
        VoiceId: 'fake',
        Text: 'Hello world'
      }, 3600, function(err, url) {
          expect(url).to.equal(expectedUrl);
          done();
      });
    });

    it('supports being called with a callback without expires', function(done) {
      var expectedUrl = 'https://polly.us-west-2.amazonaws.com/v1/speech?OutputFormat=mp3&Text=Hello%20world&TextType=text&VoiceId=fake&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=akid%2F19700101%2Fus-west-2%2Fpolly%2Faws4_request&X-Amz-Date=19700101T000000Z&X-Amz-Expires=3600&X-Amz-Signature=ad22388e7298c19a491bc77b0c1fd8f169de31f031497a0266a15e1379520ff8&X-Amz-SignedHeaders=host';
      presigner.getSynthesizeSpeechUrl({
        TextType: 'text',
        OutputFormat: 'mp3',
        VoiceId: 'fake',
        Text: 'Hello world'
      }, function(err, url) {
          expect(url).to.equal(expectedUrl);
          done();
      });
    });
  });

});
