helpers = require('../helpers')
AWS = helpers.AWS

describe 'AWS.RDS', ->
  describe 'createDBSecurityGroup', ->
    it 'properly parses XML response', ->
      rds = new AWS.RDS()
      body =
        """
        <CreateDBSecurityGroupResponse xmlns="http://rds.amazonaws.com/doc/2013-09-09/">
          <CreateDBSecurityGroupResult>
            <DBSecurityGroup>
              <EC2SecurityGroups/>
              <DBSecurityGroupDescription>foo</DBSecurityGroupDescription>
              <IPRanges/>
              <OwnerId>1234567890</OwnerId>
              <DBSecurityGroupName>foo</DBSecurityGroupName>
            </DBSecurityGroup>
          </CreateDBSecurityGroupResult>
          <ResponseMetadata>
            <RequestId>1234567890</RequestId>
          </ResponseMetadata>
        </CreateDBSecurityGroupResponse>
        """
      helpers.mockHttpResponse 200, {}, body
      params = DBSecurityGroupName:'foo', DBSecurityGroupDescription:'foo'
      rds.createDBSecurityGroup params, (error, data) ->
        expect(error).to.equal(null)
        expect(this.requestId).to.equal('1234567890')
        expect(data).to.eql
          DBSecurityGroup:
            DBSecurityGroupDescription: 'foo'
            DBSecurityGroupName: 'foo'
            EC2SecurityGroups: []
            IPRanges: []
            OwnerId: '1234567890'
          ResponseMetadata:
            RequestId: '1234567890'
  describe 'copyDBSnapshot cross-region copying', ->
     [rds, spy, err] = []
 
     cb = (e) ->
       err = e
 
     beforeEach ->
       err = null
       rds = new AWS.RDS({
         region: 'us-west-2',
         params: { SourceRegion: 'eu-central-1' }
         paramValidation: true
       })
 
       spy = helpers.spyOn(rds, 'buildCrossRegionPresignedUrl').andCallThrough()
       helpers.spyOn(AWS.util.date, 'getDate').andReturn(new Date(0))
 
     it 'builds presigned url for copyDBSnapshot', ->
       req = rds.copyDBSnapshot({
         SourceDBSnapshotIdentifier: 'source_id',
         TargetDBSnapshotIdentifier: 'target_id'
       })
       req.build()
       expect(req.response.error).to.equal(null)
       expect(spy.calls.length).to.equal(1)
       expect(req.params).to.eql({
         SourceDBSnapshotIdentifier: 'source_id',
         TargetDBSnapshotIdentifier: 'target_id',
         PreSignedUrl: 'https://rds.eu-central-1.amazonaws.com/?Action=CopyDBSnapshot&DestinationRegion=us-west-2&SourceDBSnapshotIdentifier=source_id&TargetDBSnapshotIdentifier=target_id&Version=2014-10-31&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=akid%2F19700101%2Feu-central-1%2Frds%2Faws4_request&X-Amz-Date=19700101T000000Z&X-Amz-Expires=3600&X-Amz-Security-Token=session&X-Amz-Signature=d3b9491de565d0ff1bf94d518060ec4796dc1006e7413754c7e25e3539eccf09&X-Amz-SignedHeaders=host'
       })
       expect(req.httpRequest.endpoint.href).to.equal('https://rds.us-west-2.amazonaws.com/')
 
     it 'builds v4 presigned url even when request is signed with v2', ->
       rds.config.signatureVersion = 'v2'
       req = rds.copyDBSnapshot({
         SourceDBSnapshotIdentifier: 'source_id',
         TargetDBSnapshotIdentifier: 'target_id'
       })
       req.build()
       expect(req.response.error).to.equal(null)
       expect(spy.calls.length).to.equal(1)
       expect(req.params).to.eql({
         SourceDBSnapshotIdentifier: 'source_id',
         TargetDBSnapshotIdentifier: 'target_id',
         PreSignedUrl: 'https://rds.eu-central-1.amazonaws.com/?Action=CopyDBSnapshot&DestinationRegion=us-west-2&SourceDBSnapshotIdentifier=source_id&TargetDBSnapshotIdentifier=target_id&Version=2014-10-31&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=akid%2F19700101%2Feu-central-1%2Frds%2Faws4_request&X-Amz-Date=19700101T000000Z&X-Amz-Expires=3600&X-Amz-Security-Token=session&X-Amz-Signature=d3b9491de565d0ff1bf94d518060ec4796dc1006e7413754c7e25e3539eccf09&X-Amz-SignedHeaders=host'
       })
       expect(req.httpRequest.endpoint.href).to.equal('https://rds.us-west-2.amazonaws.com/')
 
     it 'does not build presigned url for a non-supported operation', ->
       req = rds.describeDBSnapshots()
       req.build()
       expect(req.response.error).to.equal(null)
       expect(spy.calls.length).to.equal(0)
       expect(req.params).to.eql({})
 
     it 'does not build presigned url when SourceRegion is not passed as an input', ->
       delete rds.config.params
       req = rds.copyDBSnapshot({
         SourceDBSnapshotIdentifier: 'source_id',
         TargetDBSnapshotIdentifier: 'target_id'
       })
       req.build()
       expect(req.response.error).to.equal(null)
       expect(spy.calls.length).to.equal(0)
       expect(req.params).to.eql({
         SourceDBSnapshotIdentifier: 'source_id',
         TargetDBSnapshotIdentifier: 'target_id'
       })
 
     it 'does not build presigned url when PresignedUrl is passed as an input', ->
       req = rds.copyDBSnapshot({
         SourceDBSnapshotIdentifier: 'source_id',
         TargetDBSnapshotIdentifier: 'target_id',
         PreSignedUrl: 'presigned_url',
         SourceRegion: 'eu-central-1'
       })
       req.build()
       expect(req.response.error).to.equal(null)
       expect(spy.calls.length).to.equal(0)
       expect(req.params).to.eql({
         SourceDBSnapshotIdentifier: 'source_id',
         TargetDBSnapshotIdentifier: 'target_id',
         PreSignedUrl: 'presigned_url'
       })
 
     it 'does not build presigned url when SourceRegion matches destination region', ->
       req = rds.copyDBSnapshot({
         SourceDBSnapshotIdentifier: 'source_id',
         TargetDBSnapshotIdentifier: 'target_id',
         SourceRegion: 'us-west-2'
       })
       req.build()
       expect(req.response.error).to.equal(null)
       expect(spy.calls.length).to.equal(0)
       expect(req.params).to.eql({
         SourceDBSnapshotIdentifier: 'source_id',
         TargetDBSnapshotIdentifier: 'target_id',
       })
 
     describe 'user input', ->
       beforeEach ->
         delete rds.config.params
 
       it 'does not not modify user input when SourceRegion is present', ->
         params = {
           SourceDBSnapshotIdentifier: 'source_id',
           TargetDBSnapshotIdentifier: 'target_id',
           SourceRegion: 'eu-central-1'
         }
         req = rds.copyDBSnapshot(params)
         req.build()
         expect(req.response.error).to.equal(null)
         expect(spy.calls.length).to.equal(1)
         expect(req.params).to.eql({
           SourceDBSnapshotIdentifier: 'source_id',
           TargetDBSnapshotIdentifier: 'target_id',
           PreSignedUrl: 'https://rds.eu-central-1.amazonaws.com/?Action=CopyDBSnapshot&DestinationRegion=us-west-2&SourceDBSnapshotIdentifier=source_id&TargetDBSnapshotIdentifier=target_id&Version=2014-10-31&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=akid%2F19700101%2Feu-central-1%2Frds%2Faws4_request&X-Amz-Date=19700101T000000Z&X-Amz-Expires=3600&X-Amz-Security-Token=session&X-Amz-Signature=d3b9491de565d0ff1bf94d518060ec4796dc1006e7413754c7e25e3539eccf09&X-Amz-SignedHeaders=host'
         })
         expect(params).to.eql({
           SourceDBSnapshotIdentifier: 'source_id',
           TargetDBSnapshotIdentifier: 'target_id',
           SourceRegion: 'eu-central-1'
         })
 
       it 'does not not modify user input when PresignedUrl and SourceRegion is present', ->
         params = {
           SourceDBSnapshotIdentifier: 'source_id',
           TargetDBSnapshotIdentifier: 'target_id',
           SourceRegion: 'eu-central-1',
           PreSignedUrl: 'presigned_url'
         }
         req = rds.copyDBSnapshot(params)
         req.build()
         expect(req.response.error).to.equal(null)
         expect(spy.calls.length).to.equal(0)
         expect(req.params).to.eql({
           SourceDBSnapshotIdentifier: 'source_id',
           TargetDBSnapshotIdentifier: 'target_id',
           PreSignedUrl: 'presigned_url'
         })
         expect(params).to.eql({
           SourceDBSnapshotIdentifier: 'source_id',
           TargetDBSnapshotIdentifier: 'target_id',
           SourceRegion: 'eu-central-1',
           PreSignedUrl: 'presigned_url'
         })
 
       it 'does not not modify user input when SourceRegion matches destination region', ->
         params = {
           SourceDBSnapshotIdentifier: 'source_id',
           TargetDBSnapshotIdentifier: 'target_id',
           SourceRegion: 'us-west-2',
         }
         req = rds.copyDBSnapshot(params)
         req.build()
         expect(req.response.error).to.equal(null)
         expect(spy.calls.length).to.equal(0)
         expect(req.params).to.eql({
           SourceDBSnapshotIdentifier: 'source_id',
           TargetDBSnapshotIdentifier: 'target_id',
         })
         expect(params).to.eql({
           SourceDBSnapshotIdentifier: 'source_id',
           TargetDBSnapshotIdentifier: 'target_id',
           SourceRegion: 'us-west-2',
         })