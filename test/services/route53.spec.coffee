helpers = require('../helpers')
AWS = helpers.AWS

require('../../lib/services/route53')

describe 'AWS.Route53', ->

  r53 = null
  beforeEach ->
    r53 = new AWS.Route53()

  describe 'setEndpoint', ->
    it 'always enables SSL if no endpoint is set', ->
      service = new AWS.Route53(sslEnabled: false)
      expect(service.endpoint.protocol).toEqual('https:')

    it 'allows overriding SSL if custom endpoint is set', ->
      service = new AWS.Route53(endpoint: 'http://example.com')
      expect(service.endpoint.protocol).toEqual('http:')

  describe 'building requests', ->
    service = new AWS.Route53

    it 'should fix hosted zone ID on input', ->
      req = service.getHostedZone(Id: '/hostedzone/ABCDEFG')
      req.emit('build', [req])
      expect(req.httpRequest.path).toMatch('/hostedzone/ABCDEFG$')

    it 'should fix health check ID on input', ->
      req = service.getHealthCheck(HealthCheckId: '/healthcheck/ABCDEFG')
      req.emit('build', [req])
      expect(req.httpRequest.path).toMatch('/healthcheck/ABCDEFG$')

  describe 'changeResourceRecordSets', ->
    it 'correctly builds the XML document', ->
      xml =
        """
        <ChangeResourceRecordSetsRequest xmlns="https://route53.amazonaws.com/doc/2012-12-12/">
          <ChangeBatch>
            <Comment>comment</Comment>
            <Changes>
              <Change>
                <Action>CREATE</Action>
                <ResourceRecordSet>
                  <Name>name</Name>
                  <Type>type</Type>
                  <ResourceRecords>
                    <ResourceRecord>
                      <Value>foo.com</Value>
                    </ResourceRecord>
                  </ResourceRecords>
                </ResourceRecordSet>
              </Change>
            </Changes>
          </ChangeBatch>
        </ChangeResourceRecordSetsRequest>
        """
      helpers.mockHttpResponse 200, {}, ''
      # params purposefully ordered differently than api to test ordering of
      # xml elements
      params =
        HostedZoneId: 'zone-id'
        ChangeBatch:
          Changes: [
            {
              ResourceRecordSet:
                Name: 'name'
                Type: 'type'
                ResourceRecords: [
                  { Value: 'foo.com' }
                ]
              Action: 'CREATE',
            }
          ]
          Comment: 'comment'
      r53.changeResourceRecordSets params, (err, data) ->
        helpers.matchXML(this.request.httpRequest.body, xml)
