import * as AWS from '../../clients/all';
import {Credentials} from '../credentials';
export class AssumeRoleCredentials extends Credentials {
		/**
		 * Creates credentials from STS by assuming an IAM role.
		 *
		 * @param {object} options - Configuration options
		 */
		constructor(options: AssumeRoleCredentialsOptions);
	}
    interface AssumeRoleCredentialsOptions {
				/**
				* The Amazon Resource Name (ARN) of the role to assume.
				*/
        roleArn: string,

				/**
				* An identifier for the assumed role session.
				*/
				roleSessionName: string,

				/**
				* Optional STS client. If not supplied, a default STS client will be
				* constructed to assume the IAM role.
				*/
				STS?: AWS.STS
    }
