import {Service} from '../service';
import * as signer from '../cloudfront/signer';
export class CloudFrontCustomizations extends Service {
    static Signer: typeof signer.Signer;
}
export namespace CloudFrontCustomizations {
    export type Signer = signer.Signer;
    export namespace Signer {
        export type SingerOptions = signer.SignerOptions;
        export type CustomPolicy = signer.CustomPolicy;
        export type CannedPolicy = signer.CannedPolicy;
    }
}