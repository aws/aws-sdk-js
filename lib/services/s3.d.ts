import {Service} from '../service';
import {ManagedUpload} from '../s3/managed_upload';
import S3 = require('../../clients/s3');

export interface PresignedPostParams {
    /**
     * The S3 bucket to which the form should upload an attached file.
     */
    Bucket?: string;

    /**
     * An array of conditions that must be met for the form upload to be
     * accepted by S3.
     */
    Conditions?: Array<{[key: string]: any}|[string, any, any]>;

    /**
     * The number of seconds for which the POST form's signed policy should be
     * valid. Defaults to 3600 (one hour).
     */
    Expires?: number;

    /**
     * A hash of form fields to include in the presigned POST form. All fields
     * (except 'key') will be included as exact match conditions in the
     * presigned policy.
     */
    Fields?: {[key: string]: any};
}

export interface PresignedPostFields {
    /**
     * A base64-encoded policy detailing what constitutes an acceptable POST
     * upload. Composed of the conditions and expiration provided to
     * s3.createPresignedPost
     */
    Policy: string;

    /**
     * A hex-encoded HMAC of the POST policy, signed with the credentials
     * provided to the S3 client.
     */
    'X-Amz-Signature': string;

    /**
     * Additional keys that must be included in the form to be submitted. This
     * will include signature metadata as well as any fields provided to
     * s3.createPresignedPost
     */
    [key: string]: string;
}

export interface PresignedPost {
    /**
     * The URL that should be used as the action of the form.
     */
    url: string;

    /**
     * The fields that must be included as hidden inputs on the form.
     */
    fields: PresignedPostFields;
}

export class S3Customizations extends Service {
    /**
     * Get a pre-signed URL for a given operation name.
     */
    getSignedUrl(operation: string, params: any, callback: (err: Error, url: string) => void): void;
    /**
     * Get a pre-signed URL for a given operation name.
     */
    getSignedUrl(operation: string, params: any): string;

    /**
     * Get the form fields and target URL for direct POST uploading.
     */
    createPresignedPost(
        params: PresignedPostParams,
        callback: (err: Error, data: PresignedPost) => void
    ): void;
    /**
     * Get the form fields and target URL for direct POST uploading.
     */
    createPresignedPost(params: PresignedPostParams): PresignedPost;

    /**
     * Uploads an arbitrarily sized buffer, blob, or stream, using intelligent
     * concurrent handling of parts if the payload is large enough. You can
     * configure the concurrent queue size by setting `options`. Note that this
     * is the only operation for which the SDK can retry requests with stream
     * bodies.
     */
    upload(params: S3.Types.PutObjectRequest, options?: ManagedUpload.ManagedUploadOptions, callback?: (err: Error, data: ManagedUpload.SendData) => void): ManagedUpload;
    /**
     * Uploads an arbitrarily sized buffer, blob, or stream, using intelligent
     * concurrent handling of parts if the payload is large enough. You can
     * configure the concurrent queue size by setting `options`. Note that this
     * is the only operation for which the SDK can retry requests with stream
     * bodies.
     */
    upload(params: S3.Types.PutObjectRequest, callback?: (err: Error, data: ManagedUpload.SendData) => void): ManagedUpload;
    static ManagedUpload: typeof ManagedUpload;
}
