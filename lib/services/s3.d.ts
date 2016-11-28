import {Service} from '../service';
import * as uploader from '../s3/managed_upload';
import S3 = require('../../clients/s3');
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
     * Uploads an arbitrarily sized buffer, blob, or stream, using intelligent
     * concurrent handling of parts if the payload is large enough. You can
     * configure the concurrent queue size by setting `options`. Note that this
     * is the only operation for which the SDK can retry requests with stream
     * bodies.
     */
    upload(params: S3.Types.PutObjectRequest, options?: uploader.ManagedUploadOptions, callback?: (err: Error, data: uploader.SendData) => void): uploader.ManagedUpload;
    /**
     * Uploads an arbitrarily sized buffer, blob, or stream, using intelligent
     * concurrent handling of parts if the payload is large enough. You can
     * configure the concurrent queue size by setting `options`. Note that this
     * is the only operation for which the SDK can retry requests with stream
     * bodies.
     */
    upload(params: S3.Types.PutObjectRequest, callback?: (err: Error, data: uploader.SendData) => void): uploader.ManagedUpload;
    static ManagedUpload: typeof uploader.ManagedUpload;
}
export namespace S3Customizations {
    export type ManagedUpload = uploader.ManagedUpload;
    export namespace ManagedUpload {
        export type ManagedUploadOptions = uploader.ManagedUploadOptions;
        export type SendData = uploader.SendData;
    }
}