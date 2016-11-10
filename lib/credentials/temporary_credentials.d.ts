import {Credentials} from '../credentials';
import {AWSError} from '../error';
import STS = require('../../clients/sts');
export class TemporaryCredentials extends Credentials {
    /**
     * Creates a new temporary credentials object.
     * @param {string} filename - a map of options that are passed to the AWS.STS.assumeRole() or AWS.STS.getSessionToken() operations. If a RoleArn parameter is passed in, credentials will be based on the IAM role.
     */
    constructor(options?: STS.Types.AssumeRoleRequest|STS.Types.GetSessionTokenRequest);
    /**
     * Refreshes credentials using AWS.STS.assumeRole() or AWS.STS.getSessionToken(), depending on whether an IAM role ARN was passed to the credentials constructor().
     */
    refresh(callback: (err: AWSError) => void): void;

    /**
     * The master (non-temporary) credentials used to get and refresh temporary credentials from AWS STS.
     */
    masterCredentials: Credentials
}
