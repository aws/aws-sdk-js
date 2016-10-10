import {Credentials} from '../credentials';
import {AWSError} from '../error';
import CognitoIdentity = require('../../clients/cognitoidentity');
import STS = require('../../clients/sts');
export class CognitoIdentityCredentials extends Credentials {
		/**
		 * Creates a new credentials object.
		 */
		constructor(options?: CognitoIdentity.GetIdInput|CognitoIdentity.GetCredentialsForIdentityInput|CognitoIdentity.GetOpenIdTokenInput|STS.AssumeRoleWithWebIdentityRequest);
		/**
		 * Refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity(), or AWS.STS.assumeRoleWithWebIdentity().
		 */
		refresh(callback: (err: AWSError) => void): void;
        /**
         * Clears the cached Cognito ID associated with the currently configured identity pool ID.
         */
        clearCachedId(): void;
        /**
         * The raw data response from the call to AWS.CognitoIdentity.getCredentialsForIdentity(), or AWS.STS.assumeRoleWithWebIdentity().
         */
        data: CognitoIdentity.GetCredentialsForIdentityResponse|STS.AssumeRoleWithWebIdentityResponse;
        /**
         * The Cognito ID returned by the last call to AWS.CognitoIdentity.getOpenIdToken().
         */
        identityId: string;
        /**
         * The map of params passed to AWS.CognitoIdentity.getId(), AWS.CognitoIdentity.getOpenIdToken(), and AWS.STS.assumeRoleWithWebIdentity().
         */
        params: CognitoIdentity.GetIdInput|CognitoIdentity.GetOpenIdTokenInput|STS.AssumeRoleWithWebIdentityRequest;
	}