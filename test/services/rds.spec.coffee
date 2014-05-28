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
        expect(error).toBe(null)
        expect(this.requestId).toEqual('1234567890')
        expect(data).toEqual
          DBSecurityGroup:
            DBSecurityGroupDescription: 'foo'
            DBSecurityGroupName: 'foo'
            EC2SecurityGroups: []
            IPRanges: []
            OwnerId: '1234567890'
          ResponseMetadata:
            RequestId: '1234567890'
