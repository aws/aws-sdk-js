var helpers = require('../helpers');
var AWS = helpers.AWS;

describe('AWS.DocDB', function() {
  return describe('copyDBClusterSnapshot cross-region copying', function() {
    var cb, err, docdb, ref;
    ref = [], docdb = ref[0], err = ref[2];
    cb = function(e) {
      return err = e;
    };
    beforeEach(function() {
      err = null;
      docdb = new AWS.DocDB({
        region: 'us-west-2',
        params: {
          SourceRegion: 'eu-central-1'
        },
        paramValidation: true
      });
      helpers.spyOn(AWS.DocDB.prototype, 'getSkewCorrectedDate').andReturn(new Date(0));
      return helpers.spyOn(docdb, 'getSkewCorrectedDate').andReturn(new Date(0));
    });
    it('builds presigned url for copyDBClusterSnapshot', function() {
      var req;
      req = docdb.copyDBClusterSnapshot({
        SourceDBClusterSnapshotIdentifier: 'source_id',
        TargetDBClusterSnapshotIdentifier: 'target_id'
      });
      req.build();
      expect(req.response.error).to.equal(null);
      expect(req.params).to.eql({
        SourceDBClusterSnapshotIdentifier: 'source_id',
        TargetDBClusterSnapshotIdentifier: 'target_id',
        PreSignedUrl: 'https://rds.eu-central-1.amazonaws.com/?Action=CopyDBClusterSnapshot&DestinationRegion=us-west-2&SourceDBClusterSnapshotIdentifier=source_id&TargetDBClusterSnapshotIdentifier=target_id&Version=2014-10-31&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=akid%2F19700101%2Feu-central-1%2Frds%2Faws4_request&X-Amz-Date=19700101T000000Z&X-Amz-Expires=3600&X-Amz-Security-Token=session&X-Amz-Signature=b14e9105480608d8958613670c8978b683aaedd08af0f660bafb826e22605e7f&X-Amz-SignedHeaders=host'
      });
      return expect(req.httpRequest.endpoint.href).to.equal('https://rds.us-west-2.amazonaws.com/');
    });
    it('builds v4 presigned url even when request is signed with v2', function() {
      var req;
      docdb.config.signatureVersion = 'v2';
      req = docdb.copyDBClusterSnapshot({
        SourceDBClusterSnapshotIdentifier: 'source_id',
        TargetDBClusterSnapshotIdentifier: 'target_id'
      });
      req.build();
      expect(req.response.error).to.equal(null);
      expect(req.params).to.eql({
        SourceDBClusterSnapshotIdentifier: 'source_id',
        TargetDBClusterSnapshotIdentifier: 'target_id',
        PreSignedUrl: 'https://rds.eu-central-1.amazonaws.com/?Action=CopyDBClusterSnapshot&DestinationRegion=us-west-2&SourceDBClusterSnapshotIdentifier=source_id&TargetDBClusterSnapshotIdentifier=target_id&Version=2014-10-31&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=akid%2F19700101%2Feu-central-1%2Frds%2Faws4_request&X-Amz-Date=19700101T000000Z&X-Amz-Expires=3600&X-Amz-Security-Token=session&X-Amz-Signature=b14e9105480608d8958613670c8978b683aaedd08af0f660bafb826e22605e7f&X-Amz-SignedHeaders=host'
      });
      return expect(req.httpRequest.endpoint.href).to.equal('https://rds.us-west-2.amazonaws.com/');
    });
    it('does not build presigned url for a non-supported operation', function() {
      var req;
      req = docdb.describeDBClusterSnapshots();
      req.build();
      expect(req.response.error).to.equal(null);
      return expect(req.params).to.eql({});
    });
    it('does not build presigned url when SourceRegion is not passed as an input', function() {
      var req;
      delete docdb.config.params;
      req = docdb.copyDBClusterSnapshot({
        SourceDBClusterSnapshotIdentifier: 'source_id',
        TargetDBClusterSnapshotIdentifier: 'target_id'
      });
      req.build();
      expect(req.response.error).to.equal(null);
      return expect(req.params).to.eql({
        SourceDBClusterSnapshotIdentifier: 'source_id',
        TargetDBClusterSnapshotIdentifier: 'target_id'
      });
    });
    it('does not build presigned url when PresignedUrl is passed as an input', function() {
      var req;
      req = docdb.copyDBClusterSnapshot({
        SourceDBClusterSnapshotIdentifier: 'source_id',
        TargetDBClusterSnapshotIdentifier: 'target_id',
        PreSignedUrl: 'presigned_url',
        SourceRegion: 'eu-central-1'
      });
      req.build();
      expect(req.response.error).to.equal(null);
      return expect(req.params).to.eql({
        SourceDBClusterSnapshotIdentifier: 'source_id',
        TargetDBClusterSnapshotIdentifier: 'target_id',
        PreSignedUrl: 'presigned_url'
      });
    });
    it('does not build presigned url when SourceRegion matches destination region', function() {
      var req;
      req = docdb.copyDBClusterSnapshot({
        SourceDBClusterSnapshotIdentifier: 'source_id',
        TargetDBClusterSnapshotIdentifier: 'target_id',
        SourceRegion: 'us-west-2'
      });
      req.build();
      expect(req.response.error).to.equal(null);
      return expect(req.params).to.eql({
        SourceDBClusterSnapshotIdentifier: 'source_id',
        TargetDBClusterSnapshotIdentifier: 'target_id'
      });
    });
    return describe('user input', function() {
      beforeEach(function() {
        return delete docdb.config.params;
      });
      it('does not not modify user input when SourceRegion is present', function() {
        var params, req;
        params = {
          SourceDBClusterSnapshotIdentifier: 'source_id',
          TargetDBClusterSnapshotIdentifier: 'target_id',
          SourceRegion: 'eu-central-1'
        };
        req = docdb.copyDBClusterSnapshot(params);
        req.build();
        expect(req.response.error).to.equal(null);
        expect(req.params).to.eql({
          SourceDBClusterSnapshotIdentifier: 'source_id',
          TargetDBClusterSnapshotIdentifier: 'target_id',
          PreSignedUrl: 'https://rds.eu-central-1.amazonaws.com/?Action=CopyDBClusterSnapshot&DestinationRegion=us-west-2&SourceDBClusterSnapshotIdentifier=source_id&TargetDBClusterSnapshotIdentifier=target_id&Version=2014-10-31&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=akid%2F19700101%2Feu-central-1%2Frds%2Faws4_request&X-Amz-Date=19700101T000000Z&X-Amz-Expires=3600&X-Amz-Security-Token=session&X-Amz-Signature=b14e9105480608d8958613670c8978b683aaedd08af0f660bafb826e22605e7f&X-Amz-SignedHeaders=host'
        });
        return expect(params).to.eql({
          SourceDBClusterSnapshotIdentifier: 'source_id',
          TargetDBClusterSnapshotIdentifier: 'target_id',
          SourceRegion: 'eu-central-1'
        });
      });
      it('does not not modify user input when PresignedUrl and SourceRegion is present', function() {
        var params, req;
        params = {
          SourceDBClusterSnapshotIdentifier: 'source_id',
          TargetDBClusterSnapshotIdentifier: 'target_id',
          SourceRegion: 'eu-central-1',
          PreSignedUrl: 'presigned_url'
        };
        req = docdb.copyDBClusterSnapshot(params);
        req.build();
        expect(req.response.error).to.equal(null);
        expect(req.params).to.eql({
          SourceDBClusterSnapshotIdentifier: 'source_id',
          TargetDBClusterSnapshotIdentifier: 'target_id',
          PreSignedUrl: 'presigned_url'
        });
        return expect(params).to.eql({
          SourceDBClusterSnapshotIdentifier: 'source_id',
          TargetDBClusterSnapshotIdentifier: 'target_id',
          SourceRegion: 'eu-central-1',
          PreSignedUrl: 'presigned_url'
        });
      });
      return it('does not not modify user input when SourceRegion matches destination region', function() {
        var params, req;
        params = {
          SourceDBClusterSnapshotIdentifier: 'source_id',
          TargetDBClusterSnapshotIdentifier: 'target_id',
          SourceRegion: 'us-west-2'
        };
        req = docdb.copyDBClusterSnapshot(params);
        req.build();
        expect(req.response.error).to.equal(null);
        expect(req.params).to.eql({
          SourceDBClusterSnapshotIdentifier: 'source_id',
          TargetDBClusterSnapshotIdentifier: 'target_id'
        });
        return expect(params).to.eql({
          SourceDBClusterSnapshotIdentifier: 'source_id',
          TargetDBClusterSnapshotIdentifier: 'target_id',
          SourceRegion: 'us-west-2'
        });
      });
    });
  });
});
