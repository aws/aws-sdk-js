helpers = require('../helpers')
AWS = helpers.AWS

make = (obj, opts) -> new AWS.Model.Api(obj, opts)

describe 'AWS.Model.Api', ->
  describe 'loading', ->
    it 'loads properties from metadata', ->
      api = make metadata:
        apiVersion: '1.0', endpointPrefix: 'endpoint', globalEndpoint: 'global'
        signatureVersion: 'v4', protocol: 'json', timestampFormat: 'rfc822'
        xmlNamespace: 'URI', serviceAbbreviation: 'abbr', serviceFullName: 'name'
        signingName: 'alias'

      expect(api.apiVersion).to.equal('1.0')
      expect(api.endpointPrefix).to.equal('endpoint')
      expect(api.globalEndpoint).to.equal('global')
      expect(api.signatureVersion).to.equal('v4')
      expect(api.protocol).to.equal('json')
      expect(api.timestampFormat).to.equal('rfc822')
      expect(api.xmlNamespaceUri).to.equal('URI')
      expect(api.abbreviation).to.equal('abbr')
      expect(api.fullName).to.equal('name')
      expect(api.signingName).to.equal('alias')

  describe 'isApi', ->
    it 'is an API', ->
      expect(make().isApi).to.equal(true)

  describe 'className', ->
    it 'generates the correct class name from fullName', ->
      api = make metadata: serviceFullName: 'Amazon Service Name HeRE'
      expect(api.className).to.equal('ServiceNameHeRE')

    it 'uses abbreviation if supplied', ->
      api = make metadata: serviceAbbreviation: 'Amazon SNH'
      expect(api.className).to.equal('SNH')

    it 'special cases ELB', ->
      api = make metadata: serviceFullName: 'AWS Elastic Load Balancing'
      expect(api.className).to.equal('ELB')

    it 'handles lack of service name', ->
      expect(make().className).to.equal(null)

  describe 'documentation', ->
    it 'does not provide documentation by default', ->
      api = make documentation: 'foo'
      expect(api.documentation).not.to.exist

    it 'can attach documentation if option is enabled', ->
      api = make {documentation: 'foo'}, documentation: true
      expect(api.documentation).to.equal('foo')

  describe 'shapes', ->
    it 'creates a set of shapes', ->
      api = make
        shapes:
          Shape1:
            type: 'structure'
            members:
              Member1:
                shape: 'MemberShape'
                timestampFormat: 'rfc822'
          MemberShape:
            type: 'timestamp'
            timestampFormat: 'iso8601'

      expect(api.shapes.Shape1.members.Member1.type).to.equal('timestamp')
