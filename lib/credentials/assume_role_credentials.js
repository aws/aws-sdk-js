var AWS = require('../core');

/**
 * Represents credentials received from STS by assuming an IAM role.
 *
 *
 * ```javascript
 * AWS.config.credentials = new AWS.AssumeRoleCredentials({
 *   roleArn: 'arn:aws:iam::123456789012:role/some-role',
 *   roleSessionName: 'my-session'
 * });
 * ```
 *
 * @!macro nobrowser
 */
AWS.AssumeRoleCredentials = AWS.util.inherit(AWS.Credentials, {
    constructor: function(options) {
        AWS.Credentials.call(this);

        options = options ? AWS.util.copy(options) : {};

        this.roleArn = options.roleArn;
        this.roleSessionName = options.roleSessionName;
        this.STS = options.STS || new AWS.STS(options);
    },

    /**
     * Loads the credentials from STS after assuming IAM role
     *
     * @callback callback function(err)
     *   Called when the STS responds (or fails). When
     *   this callback is called with no error, it means that the credentials
     *   information has been loaded into the object (as the `accessKeyId`,
     *   `secretAccessKey`, and `sessionToken` properties).
     *   @param err [Error] if an error occurred, this value will be filled
     * @see get
     */
    refresh: function refresh(callback) {
        var self = this;
        if (!callback) callback = function(err) { if (err) throw err; };

        self.STS.assumeRole({
            RoleArn: self.roleArn,
            RoleSessionName: self.roleSessionName
        }, function(err, data) {
            if (!err) {
                self.expired = false;
                self.accessKeyId = data.Credentials.AccessKeyId;
                self.secretAccessKey = data.Credentials.SecretAccessKey;
                self.sessionToken = data.Credentials.SessionToken;
                self.expireTime = new Date(data.Credentials.Expiration);
            }
            callback(err);
        });
    }
});
