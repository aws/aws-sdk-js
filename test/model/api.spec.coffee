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

      expect(api.apiVersion).toEqual('1.0')
      expect(api.endpointPrefix).toEqual('endpoint')
      expect(api.globalEndpoint).toEqual('global')
      expect(api.signatureVersion).toEqual('v4')
      expect(api.protocol).toEqual('json')
      expect(api.timestampFormat).toEqual('rfc822')
      expect(api.xmlNamespaceUri).toEqual('URI')
      expect(api.abbreviation).toEqual('abbr')
      expect(api.fullName).toEqual('name')

  describe 'isApi', ->
    it 'is an API', ->
      expect(make().isApi).toBe(true)

  describe 'className', ->
    it 'generates the correct class name from fullName', ->
      api = make metadata: serviceFullName: 'Amazon Service Name HeRE'
      expect(api.className).toEqual('ServiceNameHeRE')

    it 'uses abbreviation if supplied', ->
      api = make metadata: serviceAbbreviation: 'Amazon SNH'
      expect(api.className).toEqual('SNH')

    it 'special cases ELB', ->
      api = make metadata: serviceFullName: 'AWS Elastic Load Balancing'
      expect(api.className).toEqual('ELB')

    it 'handles lack of service name', ->
      expect(make().className).toEqual(null)

  describe 'documentation', ->
    it 'does not provide documentation by default', ->
      api = make documentation: 'foo'
      expect(api.documentation).toEqual(null)

    it 'can attach documentation if option is enabled', ->
      api = make {documentation: 'foo'}, documentation: true
      expect(api.documentation).toEqual('foo')

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

      expect(api.shapes.Shape1.members.Member1.type).toEqual('timestamp')