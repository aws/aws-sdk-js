# Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License"). You
# may not use this file except in compliance with the License. A copy of
# the License is located at
#
#     http://aws.amazon.com/apache2.0/
#
# or in the "license" file accompanying this file. This file is
# distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
# ANY KIND, either express or implied. See the License for the specific
# language governing permissions and limitations under the License.

helpers = require('../helpers')
AWS = helpers.AWS

require('../../lib/services/route53')

describe 'AWS.Route53.Client', ->

  r53 = null
  beforeEach ->
    r53 = new AWS.Route53.Client()

  describe 'setEndpoint', ->
    it 'always enables SSL if no endpoint is set', ->
      client = new AWS.Route53.Client(sslEnabled: false)
      expect(client.endpoint.protocol).toEqual('https:')

    it 'allows overriding SSL if custom endpoint is set', ->
      client = new AWS.Route53.Client(endpoint: 'http://example.com')
      expect(client.endpoint.protocol).toEqual('http:')

  describe 'building requests', ->
    client = new AWS.Route53.Client

    it 'should fix hosted zone ID on input', ->
      req = client.getHostedZone(Id: '/hostedzone/ABCDEFG')
      req.emit('build', [req])
      expect(req.httpRequest.path).toMatch('/hostedzone/ABCDEFG$')

    it 'should fix health check ID on input', ->
      req = client.getHealthCheck(HealthCheckId: '/healthcheck/ABCDEFG')
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
