import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {CloudFrontCustomizations} from '../lib/services/cloudfront';
declare class CloudFront extends CloudFrontCustomizations {
  /**
   * Create a new origin access identity.
   */
  createCloudFrontOriginAccessIdentity(params: CloudFront.Types.CreateCloudFrontOriginAccessIdentityRequest, callback?: (err: AWSError, data: CloudFront.Types.CreateCloudFrontOriginAccessIdentityResult) => void): Request<CloudFront.Types.CreateCloudFrontOriginAccessIdentityResult, AWSError>;
  /**
   * Create a new origin access identity.
   */
  createCloudFrontOriginAccessIdentity(callback?: (err: AWSError, data: CloudFront.Types.CreateCloudFrontOriginAccessIdentityResult) => void): Request<CloudFront.Types.CreateCloudFrontOriginAccessIdentityResult, AWSError>;
  /**
   * Create a new distribution.
   */
  createDistribution(params: CloudFront.Types.CreateDistributionRequest, callback?: (err: AWSError, data: CloudFront.Types.CreateDistributionResult) => void): Request<CloudFront.Types.CreateDistributionResult, AWSError>;
  /**
   * Create a new distribution.
   */
  createDistribution(callback?: (err: AWSError, data: CloudFront.Types.CreateDistributionResult) => void): Request<CloudFront.Types.CreateDistributionResult, AWSError>;
  /**
   * Create a new distribution with tags.
   */
  createDistributionWithTags(params: CloudFront.Types.CreateDistributionWithTagsRequest, callback?: (err: AWSError, data: CloudFront.Types.CreateDistributionWithTagsResult) => void): Request<CloudFront.Types.CreateDistributionWithTagsResult, AWSError>;
  /**
   * Create a new distribution with tags.
   */
  createDistributionWithTags(callback?: (err: AWSError, data: CloudFront.Types.CreateDistributionWithTagsResult) => void): Request<CloudFront.Types.CreateDistributionWithTagsResult, AWSError>;
  /**
   * Create a new invalidation.
   */
  createInvalidation(params: CloudFront.Types.CreateInvalidationRequest, callback?: (err: AWSError, data: CloudFront.Types.CreateInvalidationResult) => void): Request<CloudFront.Types.CreateInvalidationResult, AWSError>;
  /**
   * Create a new invalidation.
   */
  createInvalidation(callback?: (err: AWSError, data: CloudFront.Types.CreateInvalidationResult) => void): Request<CloudFront.Types.CreateInvalidationResult, AWSError>;
  /**
   * Create a new streaming distribution.
   */
  createStreamingDistribution(params: CloudFront.Types.CreateStreamingDistributionRequest, callback?: (err: AWSError, data: CloudFront.Types.CreateStreamingDistributionResult) => void): Request<CloudFront.Types.CreateStreamingDistributionResult, AWSError>;
  /**
   * Create a new streaming distribution.
   */
  createStreamingDistribution(callback?: (err: AWSError, data: CloudFront.Types.CreateStreamingDistributionResult) => void): Request<CloudFront.Types.CreateStreamingDistributionResult, AWSError>;
  /**
   * Create a new streaming distribution with tags.
   */
  createStreamingDistributionWithTags(params: CloudFront.Types.CreateStreamingDistributionWithTagsRequest, callback?: (err: AWSError, data: CloudFront.Types.CreateStreamingDistributionWithTagsResult) => void): Request<CloudFront.Types.CreateStreamingDistributionWithTagsResult, AWSError>;
  /**
   * Create a new streaming distribution with tags.
   */
  createStreamingDistributionWithTags(callback?: (err: AWSError, data: CloudFront.Types.CreateStreamingDistributionWithTagsResult) => void): Request<CloudFront.Types.CreateStreamingDistributionWithTagsResult, AWSError>;
  /**
   * Delete an origin access identity.
   */
  deleteCloudFrontOriginAccessIdentity(params: CloudFront.Types.DeleteCloudFrontOriginAccessIdentityRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Delete an origin access identity.
   */
  deleteCloudFrontOriginAccessIdentity(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Delete a distribution.
   */
  deleteDistribution(params: CloudFront.Types.DeleteDistributionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Delete a distribution.
   */
  deleteDistribution(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Delete a streaming distribution.
   */
  deleteStreamingDistribution(params: CloudFront.Types.DeleteStreamingDistributionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Delete a streaming distribution.
   */
  deleteStreamingDistribution(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Get the information about an origin access identity.
   */
  getCloudFrontOriginAccessIdentity(params: CloudFront.Types.GetCloudFrontOriginAccessIdentityRequest, callback?: (err: AWSError, data: CloudFront.Types.GetCloudFrontOriginAccessIdentityResult) => void): Request<CloudFront.Types.GetCloudFrontOriginAccessIdentityResult, AWSError>;
  /**
   * Get the information about an origin access identity.
   */
  getCloudFrontOriginAccessIdentity(callback?: (err: AWSError, data: CloudFront.Types.GetCloudFrontOriginAccessIdentityResult) => void): Request<CloudFront.Types.GetCloudFrontOriginAccessIdentityResult, AWSError>;
  /**
   * Get the configuration information about an origin access identity.
   */
  getCloudFrontOriginAccessIdentityConfig(params: CloudFront.Types.GetCloudFrontOriginAccessIdentityConfigRequest, callback?: (err: AWSError, data: CloudFront.Types.GetCloudFrontOriginAccessIdentityConfigResult) => void): Request<CloudFront.Types.GetCloudFrontOriginAccessIdentityConfigResult, AWSError>;
  /**
   * Get the configuration information about an origin access identity.
   */
  getCloudFrontOriginAccessIdentityConfig(callback?: (err: AWSError, data: CloudFront.Types.GetCloudFrontOriginAccessIdentityConfigResult) => void): Request<CloudFront.Types.GetCloudFrontOriginAccessIdentityConfigResult, AWSError>;
  /**
   * Get the information about a distribution.
   */
  getDistribution(params: CloudFront.Types.GetDistributionRequest, callback?: (err: AWSError, data: CloudFront.Types.GetDistributionResult) => void): Request<CloudFront.Types.GetDistributionResult, AWSError>;
  /**
   * Get the information about a distribution.
   */
  getDistribution(callback?: (err: AWSError, data: CloudFront.Types.GetDistributionResult) => void): Request<CloudFront.Types.GetDistributionResult, AWSError>;
  /**
   * Get the configuration information about a distribution.
   */
  getDistributionConfig(params: CloudFront.Types.GetDistributionConfigRequest, callback?: (err: AWSError, data: CloudFront.Types.GetDistributionConfigResult) => void): Request<CloudFront.Types.GetDistributionConfigResult, AWSError>;
  /**
   * Get the configuration information about a distribution.
   */
  getDistributionConfig(callback?: (err: AWSError, data: CloudFront.Types.GetDistributionConfigResult) => void): Request<CloudFront.Types.GetDistributionConfigResult, AWSError>;
  /**
   * Get the information about an invalidation.
   */
  getInvalidation(params: CloudFront.Types.GetInvalidationRequest, callback?: (err: AWSError, data: CloudFront.Types.GetInvalidationResult) => void): Request<CloudFront.Types.GetInvalidationResult, AWSError>;
  /**
   * Get the information about an invalidation.
   */
  getInvalidation(callback?: (err: AWSError, data: CloudFront.Types.GetInvalidationResult) => void): Request<CloudFront.Types.GetInvalidationResult, AWSError>;
  /**
   * Get the information about a streaming distribution.
   */
  getStreamingDistribution(params: CloudFront.Types.GetStreamingDistributionRequest, callback?: (err: AWSError, data: CloudFront.Types.GetStreamingDistributionResult) => void): Request<CloudFront.Types.GetStreamingDistributionResult, AWSError>;
  /**
   * Get the information about a streaming distribution.
   */
  getStreamingDistribution(callback?: (err: AWSError, data: CloudFront.Types.GetStreamingDistributionResult) => void): Request<CloudFront.Types.GetStreamingDistributionResult, AWSError>;
  /**
   * Get the configuration information about a streaming distribution.
   */
  getStreamingDistributionConfig(params: CloudFront.Types.GetStreamingDistributionConfigRequest, callback?: (err: AWSError, data: CloudFront.Types.GetStreamingDistributionConfigResult) => void): Request<CloudFront.Types.GetStreamingDistributionConfigResult, AWSError>;
  /**
   * Get the configuration information about a streaming distribution.
   */
  getStreamingDistributionConfig(callback?: (err: AWSError, data: CloudFront.Types.GetStreamingDistributionConfigResult) => void): Request<CloudFront.Types.GetStreamingDistributionConfigResult, AWSError>;
  /**
   * List origin access identities.
   */
  listCloudFrontOriginAccessIdentities(params: CloudFront.Types.ListCloudFrontOriginAccessIdentitiesRequest, callback?: (err: AWSError, data: CloudFront.Types.ListCloudFrontOriginAccessIdentitiesResult) => void): Request<CloudFront.Types.ListCloudFrontOriginAccessIdentitiesResult, AWSError>;
  /**
   * List origin access identities.
   */
  listCloudFrontOriginAccessIdentities(callback?: (err: AWSError, data: CloudFront.Types.ListCloudFrontOriginAccessIdentitiesResult) => void): Request<CloudFront.Types.ListCloudFrontOriginAccessIdentitiesResult, AWSError>;
  /**
   * List distributions.
   */
  listDistributions(params: CloudFront.Types.ListDistributionsRequest, callback?: (err: AWSError, data: CloudFront.Types.ListDistributionsResult) => void): Request<CloudFront.Types.ListDistributionsResult, AWSError>;
  /**
   * List distributions.
   */
  listDistributions(callback?: (err: AWSError, data: CloudFront.Types.ListDistributionsResult) => void): Request<CloudFront.Types.ListDistributionsResult, AWSError>;
  /**
   * List the distributions that are associated with a specified AWS WAF web ACL.
   */
  listDistributionsByWebACLId(params: CloudFront.Types.ListDistributionsByWebACLIdRequest, callback?: (err: AWSError, data: CloudFront.Types.ListDistributionsByWebACLIdResult) => void): Request<CloudFront.Types.ListDistributionsByWebACLIdResult, AWSError>;
  /**
   * List the distributions that are associated with a specified AWS WAF web ACL.
   */
  listDistributionsByWebACLId(callback?: (err: AWSError, data: CloudFront.Types.ListDistributionsByWebACLIdResult) => void): Request<CloudFront.Types.ListDistributionsByWebACLIdResult, AWSError>;
  /**
   * List invalidation batches.
   */
  listInvalidations(params: CloudFront.Types.ListInvalidationsRequest, callback?: (err: AWSError, data: CloudFront.Types.ListInvalidationsResult) => void): Request<CloudFront.Types.ListInvalidationsResult, AWSError>;
  /**
   * List invalidation batches.
   */
  listInvalidations(callback?: (err: AWSError, data: CloudFront.Types.ListInvalidationsResult) => void): Request<CloudFront.Types.ListInvalidationsResult, AWSError>;
  /**
   * List streaming distributions.
   */
  listStreamingDistributions(params: CloudFront.Types.ListStreamingDistributionsRequest, callback?: (err: AWSError, data: CloudFront.Types.ListStreamingDistributionsResult) => void): Request<CloudFront.Types.ListStreamingDistributionsResult, AWSError>;
  /**
   * List streaming distributions.
   */
  listStreamingDistributions(callback?: (err: AWSError, data: CloudFront.Types.ListStreamingDistributionsResult) => void): Request<CloudFront.Types.ListStreamingDistributionsResult, AWSError>;
  /**
   * List tags for a CloudFront resource.
   */
  listTagsForResource(params: CloudFront.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: CloudFront.Types.ListTagsForResourceResult) => void): Request<CloudFront.Types.ListTagsForResourceResult, AWSError>;
  /**
   * List tags for a CloudFront resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: CloudFront.Types.ListTagsForResourceResult) => void): Request<CloudFront.Types.ListTagsForResourceResult, AWSError>;
  /**
   * Add tags to a CloudFront resource.
   */
  tagResource(params: CloudFront.Types.TagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Add tags to a CloudFront resource.
   */
  tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Remove tags from a CloudFront resource.
   */
  untagResource(params: CloudFront.Types.UntagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Remove tags from a CloudFront resource.
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Update an origin access identity.
   */
  updateCloudFrontOriginAccessIdentity(params: CloudFront.Types.UpdateCloudFrontOriginAccessIdentityRequest, callback?: (err: AWSError, data: CloudFront.Types.UpdateCloudFrontOriginAccessIdentityResult) => void): Request<CloudFront.Types.UpdateCloudFrontOriginAccessIdentityResult, AWSError>;
  /**
   * Update an origin access identity.
   */
  updateCloudFrontOriginAccessIdentity(callback?: (err: AWSError, data: CloudFront.Types.UpdateCloudFrontOriginAccessIdentityResult) => void): Request<CloudFront.Types.UpdateCloudFrontOriginAccessIdentityResult, AWSError>;
  /**
   * Update a distribution.
   */
  updateDistribution(params: CloudFront.Types.UpdateDistributionRequest, callback?: (err: AWSError, data: CloudFront.Types.UpdateDistributionResult) => void): Request<CloudFront.Types.UpdateDistributionResult, AWSError>;
  /**
   * Update a distribution.
   */
  updateDistribution(callback?: (err: AWSError, data: CloudFront.Types.UpdateDistributionResult) => void): Request<CloudFront.Types.UpdateDistributionResult, AWSError>;
  /**
   * Update a streaming distribution.
   */
  updateStreamingDistribution(params: CloudFront.Types.UpdateStreamingDistributionRequest, callback?: (err: AWSError, data: CloudFront.Types.UpdateStreamingDistributionResult) => void): Request<CloudFront.Types.UpdateStreamingDistributionResult, AWSError>;
  /**
   * Update a streaming distribution.
   */
  updateStreamingDistribution(callback?: (err: AWSError, data: CloudFront.Types.UpdateStreamingDistributionResult) => void): Request<CloudFront.Types.UpdateStreamingDistributionResult, AWSError>;
  /**
   * Waits for the DistributionDeployed state by periodically calling the underlying CloudFront.getDistributionoperation every 60 seconds (at most 25 times). Wait until a distribution is deployed.
   */
  waitFor(state: "DistributionDeployed", params: CloudFront.Types.GetDistributionRequest, callback?: (err: AWSError, data: CloudFront.Types.GetDistributionResult) => void): Request<CloudFront.Types.GetDistributionResult, AWSError>;
  /**
   * Waits for the DistributionDeployed state by periodically calling the underlying CloudFront.getDistributionoperation every 60 seconds (at most 25 times). Wait until a distribution is deployed.
   */
  waitFor(state: "DistributionDeployed", callback?: (err: AWSError, data: CloudFront.Types.GetDistributionResult) => void): Request<CloudFront.Types.GetDistributionResult, AWSError>;
  /**
   * Waits for the InvalidationCompleted state by periodically calling the underlying CloudFront.getInvalidationoperation every 20 seconds (at most 30 times). Wait until an invalidation has completed.
   */
  waitFor(state: "InvalidationCompleted", params: CloudFront.Types.GetInvalidationRequest, callback?: (err: AWSError, data: CloudFront.Types.GetInvalidationResult) => void): Request<CloudFront.Types.GetInvalidationResult, AWSError>;
  /**
   * Waits for the InvalidationCompleted state by periodically calling the underlying CloudFront.getInvalidationoperation every 20 seconds (at most 30 times). Wait until an invalidation has completed.
   */
  waitFor(state: "InvalidationCompleted", callback?: (err: AWSError, data: CloudFront.Types.GetInvalidationResult) => void): Request<CloudFront.Types.GetInvalidationResult, AWSError>;
  /**
   * Waits for the StreamingDistributionDeployed state by periodically calling the underlying CloudFront.getStreamingDistributionoperation every 60 seconds (at most 25 times). Wait until a streaming distribution is deployed.
   */
  waitFor(state: "StreamingDistributionDeployed", params: CloudFront.Types.GetStreamingDistributionRequest, callback?: (err: AWSError, data: CloudFront.Types.GetStreamingDistributionResult) => void): Request<CloudFront.Types.GetStreamingDistributionResult, AWSError>;
  /**
   * Waits for the StreamingDistributionDeployed state by periodically calling the underlying CloudFront.getStreamingDistributionoperation every 60 seconds (at most 25 times). Wait until a streaming distribution is deployed.
   */
  waitFor(state: "StreamingDistributionDeployed", callback?: (err: AWSError, data: CloudFront.Types.GetStreamingDistributionResult) => void): Request<CloudFront.Types.GetStreamingDistributionResult, AWSError>;
}
declare namespace CloudFront.Types {
  export interface ActiveTrustedSigners {
    /**
     * Each active trusted signer.
     */
    Enabled: boolean;
    /**
     * The number of unique trusted signers included in all cache behaviors. For example, if three cache behaviors all list the same three AWS accounts, the value of Quantity for ActiveTrustedSigners will be 3.
     */
    Quantity: integer;
    /**
     * A complex type that contains one Signer complex type for each unique trusted signer that is specified in the TrustedSigners complex type, including trusted signers in the default cache behavior and in all of the other cache behaviors.
     */
    Items?: SignerList;
  }
  export type AliasList = string[];
  export interface Aliases {
    /**
     * The number of CNAMEs, if any, for this distribution.
     */
    Quantity: integer;
    /**
     * Optional: A complex type that contains CNAME elements, if any, for this distribution. If Quantity is 0, you can omit Items.
     */
    Items?: AliasList;
  }
  export interface AllowedMethods {
    /**
     * The number of HTTP methods that you want CloudFront to forward to your origin. Valid values are 2 (for GET and HEAD requests), 3 (for GET, HEAD and OPTIONS requests) and 7 (for GET, HEAD, OPTIONS, PUT, PATCH, POST, and DELETE requests).
     */
    Quantity: integer;
    /**
     * A complex type that contains the HTTP methods that you want CloudFront to process and forward to your origin.
     */
    Items: MethodsList;
    CachedMethods?: CachedMethods;
  }
  export type AwsAccountNumberList = string[];
  export interface CacheBehavior {
    /**
     * The pattern (for example, images/*.jpg) that specifies which requests you want this cache behavior to apply to. When CloudFront receives an end-user request, the requested path is compared with path patterns in the order in which cache behaviors are listed in the distribution. The path pattern for the default cache behavior is * and cannot be changed. If the request for an object does not match the path pattern for any cache behaviors, CloudFront applies the behavior in the default cache behavior.
     */
    PathPattern: string;
    /**
     * The value of ID for the origin that you want CloudFront to route requests to when a request matches the path pattern either for a cache behavior or for the default cache behavior.
     */
    TargetOriginId: string;
    /**
     * A complex type that specifies how CloudFront handles query strings, cookies and headers.
     */
    ForwardedValues: ForwardedValues;
    /**
     * A complex type that specifies the AWS accounts, if any, that you want to allow to create signed URLs for private content. If you want to require signed URLs in requests for objects in the target origin that match the PathPattern for this cache behavior, specify true for Enabled, and specify the applicable values for Quantity and Items. For more information, go to Using a Signed URL to Serve Private Content in the Amazon CloudFront Developer Guide. If you don't want to require signed URLs in requests for objects that match PathPattern, specify false for Enabled and 0 for Quantity. Omit Items. To add, change, or remove one or more trusted signers, change Enabled to true (if it's currently false), change Quantity as applicable, and specify all of the trusted signers that you want to include in the updated distribution.
     */
    TrustedSigners: TrustedSigners;
    /**
     * Use this element to specify the protocol that users can use to access the files in the origin specified by TargetOriginId when a request matches the path pattern in PathPattern. If you want CloudFront to allow end users to use any available protocol, specify allow-all. If you want CloudFront to require HTTPS, specify https. If you want CloudFront to respond to an HTTP request with an HTTP status code of 301 (Moved Permanently) and the HTTPS URL, specify redirect-to-https. The viewer then resubmits the request using the HTTPS URL.
     */
    ViewerProtocolPolicy: ViewerProtocolPolicy;
    /**
     * The minimum amount of time that you want objects to stay in CloudFront caches before CloudFront queries your origin to see whether the object has been updated.You can specify a value from 0 to 3,153,600,000 seconds (100 years).
     */
    MinTTL: long;
    AllowedMethods?: AllowedMethods;
    /**
     * Indicates whether you want to distribute media files in Microsoft Smooth Streaming format using the origin that is associated with this cache behavior. If so, specify true; if not, specify false.
     */
    SmoothStreaming?: boolean;
    /**
     * If you don't configure your origin to add a Cache-Control max-age directive or an Expires header, DefaultTTL is the default amount of time (in seconds) that an object is in a CloudFront cache before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin does not add HTTP headers such as Cache-Control max-age, Cache-Control s-maxage, and Expires to objects. You can specify a value from 0 to 3,153,600,000 seconds (100 years).
     */
    DefaultTTL?: long;
    /**
     * The maximum amount of time (in seconds) that an object is in a CloudFront cache before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin adds HTTP headers such as Cache-Control max-age, Cache-Control s-maxage, and Expires to objects. You can specify a value from 0 to 3,153,600,000 seconds (100 years).
     */
    MaxTTL?: long;
    /**
     * Whether you want CloudFront to automatically compress content for web requests that include Accept-Encoding: gzip in the request header. If so, specify true; if not, specify false. CloudFront compresses files larger than 1000 bytes and less than 1 megabyte for both Amazon S3 and custom origins. When a CloudFront edge location is unusually busy, some files might not be compressed. The value of the Content-Type header must be on the list of file types that CloudFront will compress. For the current list, see Serving Compressed Content in the Amazon CloudFront Developer Guide. If you configure CloudFront to compress content, CloudFront removes the ETag response header from the objects that it compresses. The ETag header indicates that the version in a CloudFront edge cache is identical to the version on the origin server, but after compression the two versions are no longer identical. As a result, for compressed objects, CloudFront can't use the ETag header to determine whether an expired object in the CloudFront edge cache is still the latest version.
     */
    Compress?: boolean;
  }
  export type CacheBehaviorList = CacheBehavior[];
  export interface CacheBehaviors {
    /**
     * The number of cache behaviors for this distribution.
     */
    Quantity: integer;
    /**
     * Optional: A complex type that contains cache behaviors for this distribution. If Quantity is 0, you can omit Items.
     */
    Items?: CacheBehaviorList;
  }
  export interface CachedMethods {
    /**
     * The number of HTTP methods for which you want CloudFront to cache responses. Valid values are 2 (for caching responses to GET and HEAD requests) and 3 (for caching responses to GET, HEAD, and OPTIONS requests).
     */
    Quantity: integer;
    /**
     * A complex type that contains the HTTP methods that you want CloudFront to cache responses to.
     */
    Items: MethodsList;
  }
  export type CertificateSource = "cloudfront"|"iam"|"acm"|string;
  export interface CloudFrontOriginAccessIdentity {
    /**
     * The ID for the origin access identity. For example: E74FTE3AJFJ256A.
     */
    Id: string;
    /**
     * The Amazon S3 canonical user ID for the origin access identity, which you use when giving the origin access identity read permission to an object in Amazon S3.
     */
    S3CanonicalUserId: string;
    /**
     * The current configuration information for the identity.
     */
    CloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig;
  }
  export interface CloudFrontOriginAccessIdentityConfig {
    /**
     * A unique number that ensures the request can't be replayed. If the CallerReference is new (no matter the content of the CloudFrontOriginAccessIdentityConfig object), a new origin access identity is created. If the CallerReference is a value you already sent in a previous request to create an identity, and the content of the CloudFrontOriginAccessIdentityConfig is identical to the original request (ignoring white space), the response includes the same information returned to the original request. If the CallerReference is a value you already sent in a previous request to create an identity but the content of the CloudFrontOriginAccessIdentityConfig is different from the original request, CloudFront returns a CloudFrontOriginAccessIdentityAlreadyExists error.
     */
    CallerReference: string;
    /**
     * Any comments you want to include about the origin access identity.
     */
    Comment: string;
  }
  export interface CloudFrontOriginAccessIdentityList {
    /**
     * The value you provided for the Marker request parameter.
     */
    Marker: string;
    /**
     * If IsTruncated is true, this element is present and contains the value you can use for the Marker request parameter to continue listing your origin access identities where they left off.
     */
    NextMarker?: string;
    /**
     * The value you provided for the MaxItems request parameter.
     */
    MaxItems: integer;
    /**
     * A flag that indicates whether more origin access identities remain to be listed. If your results were truncated, you can make a follow-up pagination request using the Marker request parameter to retrieve more items in the list.
     */
    IsTruncated: boolean;
    /**
     * The number of CloudFront origin access identities that were created by the current AWS account.
     */
    Quantity: integer;
    /**
     * A complex type that contains one CloudFrontOriginAccessIdentitySummary element for each origin access identity that was created by the current AWS account.
     */
    Items?: CloudFrontOriginAccessIdentitySummaryList;
  }
  export interface CloudFrontOriginAccessIdentitySummary {
    /**
     * The ID for the origin access identity. For example: E74FTE3AJFJ256A.
     */
    Id: string;
    /**
     * The Amazon S3 canonical user ID for the origin access identity, which you use when giving the origin access identity read permission to an object in Amazon S3.
     */
    S3CanonicalUserId: string;
    /**
     * The comment for this origin access identity, as originally specified when created.
     */
    Comment: string;
  }
  export type CloudFrontOriginAccessIdentitySummaryList = CloudFrontOriginAccessIdentitySummary[];
  export type CookieNameList = string[];
  export interface CookieNames {
    /**
     * The number of whitelisted cookies for this cache behavior.
     */
    Quantity: integer;
    /**
     * Optional: A complex type that contains whitelisted cookies for this cache behavior. If Quantity is 0, you can omit Items.
     */
    Items?: CookieNameList;
  }
  export interface CookiePreference {
    /**
     * Use this element to specify whether you want CloudFront to forward cookies to the origin that is associated with this cache behavior. You can specify all, none or whitelist. If you choose All, CloudFront forwards all cookies regardless of how many your application uses.
     */
    Forward: ItemSelection;
    /**
     * A complex type that specifies the whitelisted cookies, if any, that you want CloudFront to forward to your origin that is associated with this cache behavior.
     */
    WhitelistedNames?: CookieNames;
  }
  export interface CreateCloudFrontOriginAccessIdentityRequest {
    /**
     * The origin access identity's configuration information.
     */
    CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig;
  }
  export interface CreateCloudFrontOriginAccessIdentityResult {
    /**
     * The origin access identity's information.
     */
    CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;
    /**
     * The fully qualified URI of the new origin access identity just created. For example: https://cloudfront.amazonaws.com/2010-11-01/origin-access-identity/cloudfront/E74FTE3AJFJ256A.
     */
    Location?: string;
    /**
     * The current version of the origin access identity created.
     */
    ETag?: string;
  }
  export interface CreateDistributionRequest {
    /**
     * The distribution's configuration information.
     */
    DistributionConfig: DistributionConfig;
  }
  export interface CreateDistributionResult {
    /**
     * The distribution's information.
     */
    Distribution?: Distribution;
    /**
     * The fully qualified URI of the new distribution resource just created. For example: https://cloudfront.amazonaws.com/2010-11-01/distribution/EDFDVBD632BHDS5.
     */
    Location?: string;
    /**
     * The current version of the distribution created.
     */
    ETag?: string;
  }
  export interface CreateDistributionWithTagsRequest {
    /**
     * The distribution's configuration information.
     */
    DistributionConfigWithTags: DistributionConfigWithTags;
  }
  export interface CreateDistributionWithTagsResult {
    /**
     * The distribution's information.
     */
    Distribution?: Distribution;
    /**
     * The fully qualified URI of the new distribution resource just created. For example: https://cloudfront.amazonaws.com/2010-11-01/distribution/EDFDVBD632BHDS5.
     */
    Location?: string;
    /**
     * The current version of the distribution created.
     */
    ETag?: string;
  }
  export interface CreateInvalidationRequest {
    /**
     * The distribution's id.
     */
    DistributionId: string;
    /**
     * The batch information for the invalidation.
     */
    InvalidationBatch: InvalidationBatch;
  }
  export interface CreateInvalidationResult {
    /**
     * The fully qualified URI of the distribution and invalidation batch request, including the Invalidation ID.
     */
    Location?: string;
    /**
     * The invalidation's information.
     */
    Invalidation?: Invalidation;
  }
  export interface CreateStreamingDistributionRequest {
    /**
     * The streaming distribution's configuration information.
     */
    StreamingDistributionConfig: StreamingDistributionConfig;
  }
  export interface CreateStreamingDistributionResult {
    /**
     * The streaming distribution's information.
     */
    StreamingDistribution?: StreamingDistribution;
    /**
     * The fully qualified URI of the new streaming distribution resource just created. For example: https://cloudfront.amazonaws.com/2010-11-01/streaming-distribution/EGTXBD79H29TRA8.
     */
    Location?: string;
    /**
     * The current version of the streaming distribution created.
     */
    ETag?: string;
  }
  export interface CreateStreamingDistributionWithTagsRequest {
    /**
     * The streaming distribution's configuration information.
     */
    StreamingDistributionConfigWithTags: StreamingDistributionConfigWithTags;
  }
  export interface CreateStreamingDistributionWithTagsResult {
    /**
     * The streaming distribution's information.
     */
    StreamingDistribution?: StreamingDistribution;
    /**
     * The fully qualified URI of the new streaming distribution resource just created. For example: https://cloudfront.amazonaws.com/2010-11-01/streaming-distribution/EGTXBD79H29TRA8.
     */
    Location?: string;
    /**
     * The current version of the streaming distribution created.
     */
    ETag?: string;
  }
  export interface CustomErrorResponse {
    /**
     * The 4xx or 5xx HTTP status code that you want to customize. For a list of HTTP status codes that you can customize, see CloudFront documentation.
     */
    ErrorCode: integer;
    /**
     * The path of the custom error page (for example, /custom_404.html). The path is relative to the distribution and must begin with a slash (/). If the path includes any non-ASCII characters or unsafe characters as defined in RFC 1783 (http://www.ietf.org/rfc/rfc1738.txt), URL encode those characters. Do not URL encode any other characters in the path, or CloudFront will not return the custom error page to the viewer.
     */
    ResponsePagePath?: string;
    /**
     * The HTTP status code that you want CloudFront to return with the custom error page to the viewer. For a list of HTTP status codes that you can replace, see CloudFront Documentation.
     */
    ResponseCode?: string;
    /**
     * The minimum amount of time you want HTTP error codes to stay in CloudFront caches before CloudFront queries your origin to see whether the object has been updated. You can specify a value from 0 to 31,536,000.
     */
    ErrorCachingMinTTL?: long;
  }
  export type CustomErrorResponseList = CustomErrorResponse[];
  export interface CustomErrorResponses {
    /**
     * The number of custom error responses for this distribution.
     */
    Quantity: integer;
    /**
     * Optional: A complex type that contains custom error responses for this distribution. If Quantity is 0, you can omit Items.
     */
    Items?: CustomErrorResponseList;
  }
  export interface CustomHeaders {
    /**
     * The number of custom headers for this origin.
     */
    Quantity: integer;
    /**
     * A complex type that contains the custom headers for this Origin.
     */
    Items?: OriginCustomHeadersList;
  }
  export interface CustomOriginConfig {
    /**
     * The HTTP port the custom origin listens on.
     */
    HTTPPort: integer;
    /**
     * The HTTPS port the custom origin listens on.
     */
    HTTPSPort: integer;
    /**
     * The origin protocol policy to apply to your origin.
     */
    OriginProtocolPolicy: OriginProtocolPolicy;
    /**
     * The SSL/TLS protocols that you want CloudFront to use when communicating with your origin over HTTPS.
     */
    OriginSslProtocols?: OriginSslProtocols;
  }
  export interface DefaultCacheBehavior {
    /**
     * The value of ID for the origin that you want CloudFront to route requests to when a request matches the path pattern either for a cache behavior or for the default cache behavior.
     */
    TargetOriginId: string;
    /**
     * A complex type that specifies how CloudFront handles query strings, cookies and headers.
     */
    ForwardedValues: ForwardedValues;
    /**
     * A complex type that specifies the AWS accounts, if any, that you want to allow to create signed URLs for private content. If you want to require signed URLs in requests for objects in the target origin that match the PathPattern for this cache behavior, specify true for Enabled, and specify the applicable values for Quantity and Items. For more information, go to Using a Signed URL to Serve Private Content in the Amazon CloudFront Developer Guide. If you don't want to require signed URLs in requests for objects that match PathPattern, specify false for Enabled and 0 for Quantity. Omit Items. To add, change, or remove one or more trusted signers, change Enabled to true (if it's currently false), change Quantity as applicable, and specify all of the trusted signers that you want to include in the updated distribution.
     */
    TrustedSigners: TrustedSigners;
    /**
     * Use this element to specify the protocol that users can use to access the files in the origin specified by TargetOriginId when a request matches the path pattern in PathPattern. If you want CloudFront to allow end users to use any available protocol, specify allow-all. If you want CloudFront to require HTTPS, specify https. If you want CloudFront to respond to an HTTP request with an HTTP status code of 301 (Moved Permanently) and the HTTPS URL, specify redirect-to-https. The viewer then resubmits the request using the HTTPS URL.
     */
    ViewerProtocolPolicy: ViewerProtocolPolicy;
    /**
     * The minimum amount of time that you want objects to stay in CloudFront caches before CloudFront queries your origin to see whether the object has been updated.You can specify a value from 0 to 3,153,600,000 seconds (100 years).
     */
    MinTTL: long;
    AllowedMethods?: AllowedMethods;
    /**
     * Indicates whether you want to distribute media files in Microsoft Smooth Streaming format using the origin that is associated with this cache behavior. If so, specify true; if not, specify false.
     */
    SmoothStreaming?: boolean;
    /**
     * If you don't configure your origin to add a Cache-Control max-age directive or an Expires header, DefaultTTL is the default amount of time (in seconds) that an object is in a CloudFront cache before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin does not add HTTP headers such as Cache-Control max-age, Cache-Control s-maxage, and Expires to objects. You can specify a value from 0 to 3,153,600,000 seconds (100 years).
     */
    DefaultTTL?: long;
    /**
     * The maximum amount of time (in seconds) that an object is in a CloudFront cache before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin adds HTTP headers such as Cache-Control max-age, Cache-Control s-maxage, and Expires to objects. You can specify a value from 0 to 3,153,600,000 seconds (100 years).
     */
    MaxTTL?: long;
    /**
     * Whether you want CloudFront to automatically compress content for web requests that include Accept-Encoding: gzip in the request header. If so, specify true; if not, specify false. CloudFront compresses files larger than 1000 bytes and less than 1 megabyte for both Amazon S3 and custom origins. When a CloudFront edge location is unusually busy, some files might not be compressed. The value of the Content-Type header must be on the list of file types that CloudFront will compress. For the current list, see Serving Compressed Content in the Amazon CloudFront Developer Guide. If you configure CloudFront to compress content, CloudFront removes the ETag response header from the objects that it compresses. The ETag header indicates that the version in a CloudFront edge cache is identical to the version on the origin server, but after compression the two versions are no longer identical. As a result, for compressed objects, CloudFront can't use the ETag header to determine whether an expired object in the CloudFront edge cache is still the latest version.
     */
    Compress?: boolean;
  }
  export interface DeleteCloudFrontOriginAccessIdentityRequest {
    /**
     * The origin access identity's id.
     */
    Id: string;
    /**
     * The value of the ETag header you received from a previous GET or PUT request. For example: E2QWRUHAPOMQZL.
     */
    IfMatch?: string;
  }
  export interface DeleteDistributionRequest {
    /**
     * The distribution id.
     */
    Id: string;
    /**
     * The value of the ETag header you received when you disabled the distribution. For example: E2QWRUHAPOMQZL.
     */
    IfMatch?: string;
  }
  export interface DeleteStreamingDistributionRequest {
    /**
     * The distribution id.
     */
    Id: string;
    /**
     * The value of the ETag header you received when you disabled the streaming distribution. For example: E2QWRUHAPOMQZL.
     */
    IfMatch?: string;
  }
  export interface Distribution {
    /**
     * The identifier for the distribution. For example: EDFDVBD632BHDS5.
     */
    Id: string;
    /**
     * The ARN (Amazon Resource Name) for the distribution. For example: arn:aws:cloudfront::123456789012:distribution/EDFDVBD632BHDS5, where 123456789012 is your AWS account Id.
     */
    ARN: string;
    /**
     * This response element indicates the current status of the distribution. When the status is Deployed, the distribution's information is fully propagated throughout the Amazon CloudFront system.
     */
    Status: string;
    /**
     * The date and time the distribution was last modified.
     */
    LastModifiedTime: timestamp;
    /**
     * The number of invalidation batches currently in progress.
     */
    InProgressInvalidationBatches: integer;
    /**
     * The domain name corresponding to the distribution. For example: d604721fxaaqy9.cloudfront.net.
     */
    DomainName: string;
    /**
     * CloudFront automatically adds this element to the response only if you've set up the distribution to serve private content with signed URLs. The element lists the key pair IDs that CloudFront is aware of for each trusted signer. The Signer child element lists the AWS account number of the trusted signer (or an empty Self element if the signer is you). The Signer element also includes the IDs of any active key pairs associated with the trusted signer's AWS account. If no KeyPairId element appears for a Signer, that signer can't create working signed URLs.
     */
    ActiveTrustedSigners: ActiveTrustedSigners;
    /**
     * The current configuration information for the distribution.
     */
    DistributionConfig: DistributionConfig;
  }
  export interface DistributionConfig {
    /**
     * A unique number that ensures the request can't be replayed. If the CallerReference is new (no matter the content of the DistributionConfig object), a new distribution is created. If the CallerReference is a value you already sent in a previous request to create a distribution, and the content of the DistributionConfig is identical to the original request (ignoring white space), the response includes the same information returned to the original request. If the CallerReference is a value you already sent in a previous request to create a distribution but the content of the DistributionConfig is different from the original request, CloudFront returns a DistributionAlreadyExists error.
     */
    CallerReference: string;
    /**
     * A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.
     */
    Aliases?: Aliases;
    /**
     * The object that you want CloudFront to return (for example, index.html) when an end user requests the root URL for your distribution (http://www.example.com) instead of an object in your distribution (http://www.example.com/index.html). Specifying a default root object avoids exposing the contents of your distribution. If you don't want to specify a default root object when you create a distribution, include an empty DefaultRootObject element. To delete the default root object from an existing distribution, update the distribution configuration and include an empty DefaultRootObject element. To replace the default root object, update the distribution configuration and specify the new object.
     */
    DefaultRootObject?: string;
    /**
     * A complex type that contains information about origins for this distribution.
     */
    Origins: Origins;
    /**
     * A complex type that describes the default cache behavior if you do not specify a CacheBehavior element or if files don't match any of the values of PathPattern in CacheBehavior elements.You must create exactly one default cache behavior.
     */
    DefaultCacheBehavior: DefaultCacheBehavior;
    /**
     * A complex type that contains zero or more CacheBehavior elements.
     */
    CacheBehaviors?: CacheBehaviors;
    /**
     * A complex type that contains zero or more CustomErrorResponse elements.
     */
    CustomErrorResponses?: CustomErrorResponses;
    /**
     * Any comments you want to include about the distribution.
     */
    Comment: string;
    /**
     * A complex type that controls whether access logs are written for the distribution.
     */
    Logging?: LoggingConfig;
    /**
     * A complex type that contains information about price class for this distribution.
     */
    PriceClass?: PriceClass;
    /**
     * Whether the distribution is enabled to accept end user requests for content.
     */
    Enabled: boolean;
    ViewerCertificate?: ViewerCertificate;
    Restrictions?: Restrictions;
    /**
     * (Optional) If you're using AWS WAF to filter CloudFront requests, the Id of the AWS WAF web ACL that is associated with the distribution.
     */
    WebACLId?: string;
    /**
     * (Optional) Specify the maximum HTTP version that you want viewers to use to communicate with CloudFront. The default value for new web distributions is http2. Viewers that don't support HTTP/2 will automatically use an earlier version.
     */
    HttpVersion?: HttpVersion;
  }
  export interface DistributionConfigWithTags {
    /**
     * A distribution Configuration.
     */
    DistributionConfig: DistributionConfig;
    /**
     * A complex type that contains zero or more Tag elements.
     */
    Tags: Tags;
  }
  export interface DistributionList {
    /**
     * The value you provided for the Marker request parameter.
     */
    Marker: string;
    /**
     * If IsTruncated is true, this element is present and contains the value you can use for the Marker request parameter to continue listing your distributions where they left off.
     */
    NextMarker?: string;
    /**
     * The value you provided for the MaxItems request parameter.
     */
    MaxItems: integer;
    /**
     * A flag that indicates whether more distributions remain to be listed. If your results were truncated, you can make a follow-up pagination request using the Marker request parameter to retrieve more distributions in the list.
     */
    IsTruncated: boolean;
    /**
     * The number of distributions that were created by the current AWS account.
     */
    Quantity: integer;
    /**
     * A complex type that contains one DistributionSummary element for each distribution that was created by the current AWS account.
     */
    Items?: DistributionSummaryList;
  }
  export interface DistributionSummary {
    /**
     * The identifier for the distribution. For example: EDFDVBD632BHDS5.
     */
    Id: string;
    /**
     * The ARN (Amazon Resource Name) for the distribution. For example: arn:aws:cloudfront::123456789012:distribution/EDFDVBD632BHDS5, where 123456789012 is your AWS account Id.
     */
    ARN: string;
    /**
     * This response element indicates the current status of the distribution. When the status is Deployed, the distribution's information is fully propagated throughout the Amazon CloudFront system.
     */
    Status: string;
    /**
     * The date and time the distribution was last modified.
     */
    LastModifiedTime: timestamp;
    /**
     * The domain name corresponding to the distribution. For example: d604721fxaaqy9.cloudfront.net.
     */
    DomainName: string;
    /**
     * A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.
     */
    Aliases: Aliases;
    /**
     * A complex type that contains information about origins for this distribution.
     */
    Origins: Origins;
    /**
     * A complex type that describes the default cache behavior if you do not specify a CacheBehavior element or if files don't match any of the values of PathPattern in CacheBehavior elements.You must create exactly one default cache behavior.
     */
    DefaultCacheBehavior: DefaultCacheBehavior;
    /**
     * A complex type that contains zero or more CacheBehavior elements.
     */
    CacheBehaviors: CacheBehaviors;
    /**
     * A complex type that contains zero or more CustomErrorResponses elements.
     */
    CustomErrorResponses: CustomErrorResponses;
    /**
     * The comment originally specified when this distribution was created.
     */
    Comment: string;
    PriceClass: PriceClass;
    /**
     * Whether the distribution is enabled to accept end user requests for content.
     */
    Enabled: boolean;
    ViewerCertificate: ViewerCertificate;
    Restrictions: Restrictions;
    /**
     * The Web ACL Id (if any) associated with the distribution.
     */
    WebACLId: string;
    /**
     * Specify the maximum HTTP version that you want viewers to use to communicate with CloudFront. The default value for new web distributions is http2. Viewers that don't support HTTP/2 will automatically use an earlier version.
     */
    HttpVersion: HttpVersion;
  }
  export type DistributionSummaryList = DistributionSummary[];
  export interface ForwardedValues {
    /**
     * Indicates whether you want CloudFront to forward query strings to the origin that is associated with this cache behavior and cache based on the query string parameters. CloudFront behavior depends on the value of QueryString and on the values that you specify for QueryStringCacheKeys, if any:  If you specify true for QueryString and you don't specify any values for QueryStringCacheKeys, CloudFront forwards all query string parameters to the origin and caches based on all query string parameters. Depending on how many query string parameters and values you have, this can adversely affect performance because CloudFront must forward more requests to the origin. If you specify true for QueryString and you specify one or more values for QueryStringCacheKeys, CloudFront forwards all query string parameters to the origin, but it only caches based on the query string parameters that you specify. If you specify false for QueryString, CloudFront doesn't forward any query string parameters to the origin, and doesn't cache based on query string parameters. 
     */
    QueryString: boolean;
    /**
     * A complex type that specifies how CloudFront handles cookies.
     */
    Cookies: CookiePreference;
    /**
     * A complex type that specifies the Headers, if any, that you want CloudFront to vary upon for this cache behavior.
     */
    Headers?: Headers;
    /**
     * A complex type that contains information about the query string parameters that you want CloudFront to use for caching for this cache behavior.
     */
    QueryStringCacheKeys?: QueryStringCacheKeys;
  }
  export interface GeoRestriction {
    /**
     * The method that you want to use to restrict distribution of your content by country: - none: No geo restriction is enabled, meaning access to content is not restricted by client geo location. - blacklist: The Location elements specify the countries in which you do not want CloudFront to distribute your content. - whitelist: The Location elements specify the countries in which you want CloudFront to distribute your content.
     */
    RestrictionType: GeoRestrictionType;
    /**
     * When geo restriction is enabled, this is the number of countries in your whitelist or blacklist. Otherwise, when it is not enabled, Quantity is 0, and you can omit Items.
     */
    Quantity: integer;
    /**
     * A complex type that contains a Location element for each country in which you want CloudFront either to distribute your content (whitelist) or not distribute your content (blacklist). The Location element is a two-letter, uppercase country code for a country that you want to include in your blacklist or whitelist. Include one Location element for each country. CloudFront and MaxMind both use ISO 3166 country codes. For the current list of countries and the corresponding codes, see ISO 3166-1-alpha-2 code on the International Organization for Standardization website. You can also refer to the country list in the CloudFront console, which includes both country names and codes.
     */
    Items?: LocationList;
  }
  export type GeoRestrictionType = "blacklist"|"whitelist"|"none"|string;
  export interface GetCloudFrontOriginAccessIdentityConfigRequest {
    /**
     * The identity's id.
     */
    Id: string;
  }
  export interface GetCloudFrontOriginAccessIdentityConfigResult {
    /**
     * The origin access identity's configuration information.
     */
    CloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig;
    /**
     * The current version of the configuration. For example: E2QWRUHAPOMQZL.
     */
    ETag?: string;
  }
  export interface GetCloudFrontOriginAccessIdentityRequest {
    /**
     * The identity's id.
     */
    Id: string;
  }
  export interface GetCloudFrontOriginAccessIdentityResult {
    /**
     * The origin access identity's information.
     */
    CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;
    /**
     * The current version of the origin access identity's information. For example: E2QWRUHAPOMQZL.
     */
    ETag?: string;
  }
  export interface GetDistributionConfigRequest {
    /**
     * The distribution's id.
     */
    Id: string;
  }
  export interface GetDistributionConfigResult {
    /**
     * The distribution's configuration information.
     */
    DistributionConfig?: DistributionConfig;
    /**
     * The current version of the configuration. For example: E2QWRUHAPOMQZL.
     */
    ETag?: string;
  }
  export interface GetDistributionRequest {
    /**
     * The distribution's id.
     */
    Id: string;
  }
  export interface GetDistributionResult {
    /**
     * The distribution's information.
     */
    Distribution?: Distribution;
    /**
     * The current version of the distribution's information. For example: E2QWRUHAPOMQZL.
     */
    ETag?: string;
  }
  export interface GetInvalidationRequest {
    /**
     * The distribution's id.
     */
    DistributionId: string;
    /**
     * The invalidation's id.
     */
    Id: string;
  }
  export interface GetInvalidationResult {
    /**
     * The invalidation's information.
     */
    Invalidation?: Invalidation;
  }
  export interface GetStreamingDistributionConfigRequest {
    /**
     * The streaming distribution's id.
     */
    Id: string;
  }
  export interface GetStreamingDistributionConfigResult {
    /**
     * The streaming distribution's configuration information.
     */
    StreamingDistributionConfig?: StreamingDistributionConfig;
    /**
     * The current version of the configuration. For example: E2QWRUHAPOMQZL.
     */
    ETag?: string;
  }
  export interface GetStreamingDistributionRequest {
    /**
     * The streaming distribution's id.
     */
    Id: string;
  }
  export interface GetStreamingDistributionResult {
    /**
     * The streaming distribution's information.
     */
    StreamingDistribution?: StreamingDistribution;
    /**
     * The current version of the streaming distribution's information. For example: E2QWRUHAPOMQZL.
     */
    ETag?: string;
  }
  export type HeaderList = string[];
  export interface Headers {
    /**
     * The number of different headers that you want CloudFront to forward to the origin and to vary on for this cache behavior. The maximum number of headers that you can specify by name is 10. If you want CloudFront to forward all headers to the origin and vary on all of them, specify 1 for Quantity and * for Name. If you don't want CloudFront to forward any additional headers to the origin or to vary on any headers, specify 0 for Quantity and omit Items.
     */
    Quantity: integer;
    /**
     * Optional: A complex type that contains a Name element for each header that you want CloudFront to forward to the origin and to vary on for this cache behavior. If Quantity is 0, omit Items.
     */
    Items?: HeaderList;
  }
  export type HttpVersion = "http1.1"|"http2"|string;
  export interface Invalidation {
    /**
     * The identifier for the invalidation request. For example: IDFDVBD632BHDS5.
     */
    Id: string;
    /**
     * The status of the invalidation request. When the invalidation batch is finished, the status is Completed.
     */
    Status: string;
    /**
     * The date and time the invalidation request was first made.
     */
    CreateTime: timestamp;
    /**
     * The current invalidation information for the batch request.
     */
    InvalidationBatch: InvalidationBatch;
  }
  export interface InvalidationBatch {
    /**
     * The path of the object to invalidate. The path is relative to the distribution and must begin with a slash (/). You must enclose each invalidation object with the Path element tags. If the path includes non-ASCII characters or unsafe characters as defined in RFC 1783 (http://www.ietf.org/rfc/rfc1738.txt), URL encode those characters. Do not URL encode any other characters in the path, or CloudFront will not invalidate the old version of the updated object.
     */
    Paths: Paths;
    /**
     * A unique name that ensures the request can't be replayed. If the CallerReference is new (no matter the content of the Path object), a new distribution is created. If the CallerReference is a value you already sent in a previous request to create an invalidation batch, and the content of each Path element is identical to the original request, the response includes the same information returned to the original request. If the CallerReference is a value you already sent in a previous request to create a distribution but the content of any Path is different from the original request, CloudFront returns an InvalidationBatchAlreadyExists error.
     */
    CallerReference: string;
  }
  export interface InvalidationList {
    /**
     * The value you provided for the Marker request parameter.
     */
    Marker: string;
    /**
     * If IsTruncated is true, this element is present and contains the value you can use for the Marker request parameter to continue listing your invalidation batches where they left off.
     */
    NextMarker?: string;
    /**
     * The value you provided for the MaxItems request parameter.
     */
    MaxItems: integer;
    /**
     * A flag that indicates whether more invalidation batch requests remain to be listed. If your results were truncated, you can make a follow-up pagination request using the Marker request parameter to retrieve more invalidation batches in the list.
     */
    IsTruncated: boolean;
    /**
     * The number of invalidation batches that were created by the current AWS account.
     */
    Quantity: integer;
    /**
     * A complex type that contains one InvalidationSummary element for each invalidation batch that was created by the current AWS account.
     */
    Items?: InvalidationSummaryList;
  }
  export interface InvalidationSummary {
    /**
     * The unique ID for an invalidation request.
     */
    Id: string;
    CreateTime: timestamp;
    /**
     * The status of an invalidation request.
     */
    Status: string;
  }
  export type InvalidationSummaryList = InvalidationSummary[];
  export type ItemSelection = "none"|"whitelist"|"all"|string;
  export type KeyPairIdList = string[];
  export interface KeyPairIds {
    /**
     * The number of active CloudFront key pairs for AwsAccountNumber.
     */
    Quantity: integer;
    /**
     * A complex type that lists the active CloudFront key pairs, if any, that are associated with AwsAccountNumber.
     */
    Items?: KeyPairIdList;
  }
  export interface ListCloudFrontOriginAccessIdentitiesRequest {
    /**
     * Use this when paginating results to indicate where to begin in your list of origin access identities. The results include identities in the list that occur after the marker. To get the next page of results, set the Marker to the value of the NextMarker from the current page's response (which is also the ID of the last identity on that page).
     */
    Marker?: string;
    /**
     * The maximum number of origin access identities you want in the response body.
     */
    MaxItems?: string;
  }
  export interface ListCloudFrontOriginAccessIdentitiesResult {
    /**
     * The CloudFrontOriginAccessIdentityList type.
     */
    CloudFrontOriginAccessIdentityList?: CloudFrontOriginAccessIdentityList;
  }
  export interface ListDistributionsByWebACLIdRequest {
    /**
     * Use Marker and MaxItems to control pagination of results. If you have more than MaxItems distributions that satisfy the request, the response includes a NextMarker element. To get the next page of results, submit another request. For the value of Marker, specify the value of NextMarker from the last response. (For the first request, omit Marker.)
     */
    Marker?: string;
    /**
     * The maximum number of distributions that you want CloudFront to return in the response body. The maximum and default values are both 100.
     */
    MaxItems?: string;
    /**
     * The Id of the AWS WAF web ACL for which you want to list the associated distributions. If you specify "null" for the Id, the request returns a list of the distributions that aren't associated with a web ACL.
     */
    WebACLId: string;
  }
  export interface ListDistributionsByWebACLIdResult {
    /**
     * The DistributionList type.
     */
    DistributionList?: DistributionList;
  }
  export interface ListDistributionsRequest {
    /**
     * Use Marker and MaxItems to control pagination of results. If you have more than MaxItems distributions that satisfy the request, the response includes a NextMarker element. To get the next page of results, submit another request. For the value of Marker, specify the value of NextMarker from the last response. (For the first request, omit Marker.)
     */
    Marker?: string;
    /**
     * The maximum number of distributions that you want CloudFront to return in the response body. The maximum and default values are both 100.
     */
    MaxItems?: string;
  }
  export interface ListDistributionsResult {
    /**
     * The DistributionList type.
     */
    DistributionList?: DistributionList;
  }
  export interface ListInvalidationsRequest {
    /**
     * The distribution's id.
     */
    DistributionId: string;
    /**
     * Use this parameter when paginating results to indicate where to begin in your list of invalidation batches. Because the results are returned in decreasing order from most recent to oldest, the most recent results are on the first page, the second page will contain earlier results, and so on. To get the next page of results, set the Marker to the value of the NextMarker from the current page's response. This value is the same as the ID of the last invalidation batch on that page.
     */
    Marker?: string;
    /**
     * The maximum number of invalidation batches you want in the response body.
     */
    MaxItems?: string;
  }
  export interface ListInvalidationsResult {
    /**
     * Information about invalidation batches.
     */
    InvalidationList?: InvalidationList;
  }
  export interface ListStreamingDistributionsRequest {
    /**
     * Use this when paginating results to indicate where to begin in your list of streaming distributions. The results include distributions in the list that occur after the marker. To get the next page of results, set the Marker to the value of the NextMarker from the current page's response (which is also the ID of the last distribution on that page).
     */
    Marker?: string;
    /**
     * The maximum number of streaming distributions you want in the response body.
     */
    MaxItems?: string;
  }
  export interface ListStreamingDistributionsResult {
    /**
     * The StreamingDistributionList type.
     */
    StreamingDistributionList?: StreamingDistributionList;
  }
  export interface ListTagsForResourceRequest {
    /**
     * An ARN of a CloudFront resource.
     */
    Resource: ResourceARN;
  }
  export interface ListTagsForResourceResult {
    /**
     * A complex type that contains zero or more Tag elements.
     */
    Tags: Tags;
  }
  export type LocationList = string[];
  export interface LoggingConfig {
    /**
     * Specifies whether you want CloudFront to save access logs to an Amazon S3 bucket. If you do not want to enable logging when you create a distribution or if you want to disable logging for an existing distribution, specify false for Enabled, and specify empty Bucket and Prefix elements. If you specify false for Enabled but you specify values for Bucket, prefix and IncludeCookies, the values are automatically deleted.
     */
    Enabled: boolean;
    /**
     * Specifies whether you want CloudFront to include cookies in access logs, specify true for IncludeCookies. If you choose to include cookies in logs, CloudFront logs all cookies regardless of how you configure the cache behaviors for this distribution. If you do not want to include cookies when you create a distribution or if you want to disable include cookies for an existing distribution, specify false for IncludeCookies.
     */
    IncludeCookies: boolean;
    /**
     * The Amazon S3 bucket to store the access logs in, for example, myawslogbucket.s3.amazonaws.com.
     */
    Bucket: string;
    /**
     * An optional string that you want CloudFront to prefix to the access log filenames for this distribution, for example, myprefix/. If you want to enable logging, but you do not want to specify a prefix, you still must include an empty Prefix element in the Logging element.
     */
    Prefix: string;
  }
  export type Method = "GET"|"HEAD"|"POST"|"PUT"|"PATCH"|"OPTIONS"|"DELETE"|string;
  export type MethodsList = Method[];
  export type MinimumProtocolVersion = "SSLv3"|"TLSv1"|string;
  export interface Origin {
    /**
     * A unique identifier for the origin. The value of Id must be unique within the distribution. You use the value of Id when you create a cache behavior. The Id identifies the origin that CloudFront routes a request to when the request matches the path pattern for that cache behavior.
     */
    Id: string;
    /**
     * Amazon S3 origins: The DNS name of the Amazon S3 bucket from which you want CloudFront to get objects for this origin, for example, myawsbucket.s3.amazonaws.com. Custom origins: The DNS domain name for the HTTP server from which you want CloudFront to get objects for this origin, for example, www.example.com.
     */
    DomainName: string;
    /**
     * An optional element that causes CloudFront to request your content from a directory in your Amazon S3 bucket or your custom origin. When you include the OriginPath element, specify the directory name, beginning with a /. CloudFront appends the directory name to the value of DomainName.
     */
    OriginPath?: string;
    /**
     * A complex type that contains information about the custom headers associated with this Origin.
     */
    CustomHeaders?: CustomHeaders;
    /**
     * A complex type that contains information about the Amazon S3 origin. If the origin is a custom origin, use the CustomOriginConfig element instead.
     */
    S3OriginConfig?: S3OriginConfig;
    /**
     * A complex type that contains information about a custom origin. If the origin is an Amazon S3 bucket, use the S3OriginConfig element instead.
     */
    CustomOriginConfig?: CustomOriginConfig;
  }
  export interface OriginCustomHeader {
    /**
     * The header's name.
     */
    HeaderName: string;
    /**
     * The header's value.
     */
    HeaderValue: string;
  }
  export type OriginCustomHeadersList = OriginCustomHeader[];
  export type OriginList = Origin[];
  export type OriginProtocolPolicy = "http-only"|"match-viewer"|"https-only"|string;
  export interface OriginSslProtocols {
    /**
     * The number of SSL/TLS protocols that you want to allow CloudFront to use when establishing an HTTPS connection with this origin.
     */
    Quantity: integer;
    /**
     * A complex type that contains one SslProtocol element for each SSL/TLS protocol that you want to allow CloudFront to use when establishing an HTTPS connection with this origin.
     */
    Items: SslProtocolsList;
  }
  export interface Origins {
    /**
     * The number of origins for this distribution.
     */
    Quantity: integer;
    /**
     * A complex type that contains origins for this distribution.
     */
    Items?: OriginList;
  }
  export type PathList = string[];
  export interface Paths {
    /**
     * The number of objects that you want to invalidate.
     */
    Quantity: integer;
    /**
     * A complex type that contains a list of the objects that you want to invalidate.
     */
    Items?: PathList;
  }
  export type PriceClass = "PriceClass_100"|"PriceClass_200"|"PriceClass_All"|string;
  export interface QueryStringCacheKeys {
    /**
     * The number of whitelisted query string parameters for this cache behavior.
     */
    Quantity: integer;
    /**
     * Optional: A list that contains the query string parameters that you want CloudFront to use as a basis for caching for this cache behavior. If Quantity is 0, you can omit Items.
     */
    Items?: QueryStringCacheKeysList;
  }
  export type QueryStringCacheKeysList = string[];
  export type ResourceARN = string;
  export interface Restrictions {
    GeoRestriction: GeoRestriction;
  }
  export interface S3Origin {
    /**
     * The DNS name of the S3 origin.
     */
    DomainName: string;
    /**
     * Your S3 origin's origin access identity.
     */
    OriginAccessIdentity: string;
  }
  export interface S3OriginConfig {
    /**
     * The CloudFront origin access identity to associate with the origin. Use an origin access identity to configure the origin so that end users can only access objects in an Amazon S3 bucket through CloudFront. If you want end users to be able to access objects using either the CloudFront URL or the Amazon S3 URL, specify an empty OriginAccessIdentity element. To delete the origin access identity from an existing distribution, update the distribution configuration and include an empty OriginAccessIdentity element. To replace the origin access identity, update the distribution configuration and specify the new origin access identity. Use the format origin-access-identity/cloudfront/Id where Id is the value that CloudFront returned in the Id element when you created the origin access identity.
     */
    OriginAccessIdentity: string;
  }
  export type SSLSupportMethod = "sni-only"|"vip"|string;
  export interface Signer {
    /**
     * Specifies an AWS account that can create signed URLs. Values: self, which indicates that the AWS account that was used to create the distribution can created signed URLs, or an AWS account number. Omit the dashes in the account number.
     */
    AwsAccountNumber?: string;
    /**
     * A complex type that lists the active CloudFront key pairs, if any, that are associated with AwsAccountNumber.
     */
    KeyPairIds?: KeyPairIds;
  }
  export type SignerList = Signer[];
  export type SslProtocol = "SSLv3"|"TLSv1"|"TLSv1.1"|"TLSv1.2"|string;
  export type SslProtocolsList = SslProtocol[];
  export interface StreamingDistribution {
    /**
     * The identifier for the streaming distribution. For example: EGTXBD79H29TRA8.
     */
    Id: string;
    /**
     * The ARN (Amazon Resource Name) for the streaming distribution. For example: arn:aws:cloudfront::123456789012:streaming-distribution/EDFDVBD632BHDS5, where 123456789012 is your AWS account Id.
     */
    ARN: string;
    /**
     * The current status of the streaming distribution. When the status is Deployed, the distribution's information is fully propagated throughout the Amazon CloudFront system.
     */
    Status: string;
    /**
     * The date and time the distribution was last modified.
     */
    LastModifiedTime?: timestamp;
    /**
     * The domain name corresponding to the streaming distribution. For example: s5c39gqb8ow64r.cloudfront.net.
     */
    DomainName: string;
    /**
     * CloudFront automatically adds this element to the response only if you've set up the distribution to serve private content with signed URLs. The element lists the key pair IDs that CloudFront is aware of for each trusted signer. The Signer child element lists the AWS account number of the trusted signer (or an empty Self element if the signer is you). The Signer element also includes the IDs of any active key pairs associated with the trusted signer's AWS account. If no KeyPairId element appears for a Signer, that signer can't create working signed URLs.
     */
    ActiveTrustedSigners: ActiveTrustedSigners;
    /**
     * The current configuration information for the streaming distribution.
     */
    StreamingDistributionConfig: StreamingDistributionConfig;
  }
  export interface StreamingDistributionConfig {
    /**
     * A unique number that ensures the request can't be replayed. If the CallerReference is new (no matter the content of the StreamingDistributionConfig object), a new streaming distribution is created. If the CallerReference is a value you already sent in a previous request to create a streaming distribution, and the content of the StreamingDistributionConfig is identical to the original request (ignoring white space), the response includes the same information returned to the original request. If the CallerReference is a value you already sent in a previous request to create a streaming distribution but the content of the StreamingDistributionConfig is different from the original request, CloudFront returns a DistributionAlreadyExists error.
     */
    CallerReference: string;
    /**
     * A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution.
     */
    S3Origin: S3Origin;
    /**
     * A complex type that contains information about CNAMEs (alternate domain names), if any, for this streaming distribution.
     */
    Aliases?: Aliases;
    /**
     * Any comments you want to include about the streaming distribution.
     */
    Comment: string;
    /**
     * A complex type that controls whether access logs are written for the streaming distribution.
     */
    Logging?: StreamingLoggingConfig;
    /**
     * A complex type that specifies the AWS accounts, if any, that you want to allow to create signed URLs for private content. If you want to require signed URLs in requests for objects in the target origin that match the PathPattern for this cache behavior, specify true for Enabled, and specify the applicable values for Quantity and Items. For more information, go to Using a Signed URL to Serve Private Content in the Amazon CloudFront Developer Guide. If you don't want to require signed URLs in requests for objects that match PathPattern, specify false for Enabled and 0 for Quantity. Omit Items. To add, change, or remove one or more trusted signers, change Enabled to true (if it's currently false), change Quantity as applicable, and specify all of the trusted signers that you want to include in the updated distribution.
     */
    TrustedSigners: TrustedSigners;
    /**
     * A complex type that contains information about price class for this streaming distribution.
     */
    PriceClass?: PriceClass;
    /**
     * Whether the streaming distribution is enabled to accept end user requests for content.
     */
    Enabled: boolean;
  }
  export interface StreamingDistributionConfigWithTags {
    /**
     * A streaming distribution Configuration.
     */
    StreamingDistributionConfig: StreamingDistributionConfig;
    /**
     * A complex type that contains zero or more Tag elements.
     */
    Tags: Tags;
  }
  export interface StreamingDistributionList {
    /**
     * The value you provided for the Marker request parameter.
     */
    Marker: string;
    /**
     * If IsTruncated is true, this element is present and contains the value you can use for the Marker request parameter to continue listing your streaming distributions where they left off.
     */
    NextMarker?: string;
    /**
     * The value you provided for the MaxItems request parameter.
     */
    MaxItems: integer;
    /**
     * A flag that indicates whether more streaming distributions remain to be listed. If your results were truncated, you can make a follow-up pagination request using the Marker request parameter to retrieve more distributions in the list.
     */
    IsTruncated: boolean;
    /**
     * The number of streaming distributions that were created by the current AWS account.
     */
    Quantity: integer;
    /**
     * A complex type that contains one StreamingDistributionSummary element for each distribution that was created by the current AWS account.
     */
    Items?: StreamingDistributionSummaryList;
  }
  export interface StreamingDistributionSummary {
    /**
     * The identifier for the distribution. For example: EDFDVBD632BHDS5.
     */
    Id: string;
    /**
     * The ARN (Amazon Resource Name) for the streaming distribution. For example: arn:aws:cloudfront::123456789012:streaming-distribution/EDFDVBD632BHDS5, where 123456789012 is your AWS account Id.
     */
    ARN: string;
    /**
     * Indicates the current status of the distribution. When the status is Deployed, the distribution's information is fully propagated throughout the Amazon CloudFront system.
     */
    Status: string;
    /**
     * The date and time the distribution was last modified.
     */
    LastModifiedTime: timestamp;
    /**
     * The domain name corresponding to the distribution. For example: d604721fxaaqy9.cloudfront.net.
     */
    DomainName: string;
    /**
     * A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution.
     */
    S3Origin: S3Origin;
    /**
     * A complex type that contains information about CNAMEs (alternate domain names), if any, for this streaming distribution.
     */
    Aliases: Aliases;
    /**
     * A complex type that specifies the AWS accounts, if any, that you want to allow to create signed URLs for private content. If you want to require signed URLs in requests for objects in the target origin that match the PathPattern for this cache behavior, specify true for Enabled, and specify the applicable values for Quantity and Items. For more information, go to Using a Signed URL to Serve Private Content in the Amazon CloudFront Developer Guide. If you don't want to require signed URLs in requests for objects that match PathPattern, specify false for Enabled and 0 for Quantity. Omit Items. To add, change, or remove one or more trusted signers, change Enabled to true (if it's currently false), change Quantity as applicable, and specify all of the trusted signers that you want to include in the updated distribution.
     */
    TrustedSigners: TrustedSigners;
    /**
     * The comment originally specified when this distribution was created.
     */
    Comment: string;
    PriceClass: PriceClass;
    /**
     * Whether the distribution is enabled to accept end user requests for content.
     */
    Enabled: boolean;
  }
  export type StreamingDistributionSummaryList = StreamingDistributionSummary[];
  export interface StreamingLoggingConfig {
    /**
     * Specifies whether you want CloudFront to save access logs to an Amazon S3 bucket. If you do not want to enable logging when you create a streaming distribution or if you want to disable logging for an existing streaming distribution, specify false for Enabled, and specify empty Bucket and Prefix elements. If you specify false for Enabled but you specify values for Bucket and Prefix, the values are automatically deleted.
     */
    Enabled: boolean;
    /**
     * The Amazon S3 bucket to store the access logs in, for example, myawslogbucket.s3.amazonaws.com.
     */
    Bucket: string;
    /**
     * An optional string that you want CloudFront to prefix to the access log filenames for this streaming distribution, for example, myprefix/. If you want to enable logging, but you do not want to specify a prefix, you still must include an empty Prefix element in the Logging element.
     */
    Prefix: string;
  }
  export interface Tag {
    /**
     * A string that contains Tag key. The string length should be between 1 and 128 characters. Valid characters include a-z, A-Z, 0-9, space, and the special characters _ - . : / = + @.
     */
    Key: TagKey;
    /**
     * A string that contains an optional Tag value. The string length should be between 0 and 256 characters. Valid characters include a-z, A-Z, 0-9, space, and the special characters _ - . : / = + @.
     */
    Value?: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export interface TagKeys {
    /**
     * A complex type that contains Tag key elements
     */
    Items?: TagKeyList;
  }
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * An ARN of a CloudFront resource.
     */
    Resource: ResourceARN;
    /**
     * A complex type that contains zero or more Tag elements.
     */
    Tags: Tags;
  }
  export type TagValue = string;
  export interface Tags {
    /**
     * A complex type that contains Tag elements
     */
    Items?: TagList;
  }
  export interface TrustedSigners {
    /**
     * Specifies whether you want to require end users to use signed URLs to access the files specified by PathPattern and TargetOriginId.
     */
    Enabled: boolean;
    /**
     * The number of trusted signers for this cache behavior.
     */
    Quantity: integer;
    /**
     * Optional: A complex type that contains trusted signers for this cache behavior. If Quantity is 0, you can omit Items.
     */
    Items?: AwsAccountNumberList;
  }
  export interface UntagResourceRequest {
    /**
     * An ARN of a CloudFront resource.
     */
    Resource: ResourceARN;
    /**
     * A complex type that contains zero or more Tag key elements.
     */
    TagKeys: TagKeys;
  }
  export interface UpdateCloudFrontOriginAccessIdentityRequest {
    /**
     * The identity's configuration information.
     */
    CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig;
    /**
     * The identity's id.
     */
    Id: string;
    /**
     * The value of the ETag header you received when retrieving the identity's configuration. For example: E2QWRUHAPOMQZL.
     */
    IfMatch?: string;
  }
  export interface UpdateCloudFrontOriginAccessIdentityResult {
    /**
     * The origin access identity's information.
     */
    CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;
    /**
     * The current version of the configuration. For example: E2QWRUHAPOMQZL.
     */
    ETag?: string;
  }
  export interface UpdateDistributionRequest {
    /**
     * The distribution's configuration information.
     */
    DistributionConfig: DistributionConfig;
    /**
     * The distribution's id.
     */
    Id: string;
    /**
     * The value of the ETag header you received when retrieving the distribution's configuration. For example: E2QWRUHAPOMQZL.
     */
    IfMatch?: string;
  }
  export interface UpdateDistributionResult {
    /**
     * The distribution's information.
     */
    Distribution?: Distribution;
    /**
     * The current version of the configuration. For example: E2QWRUHAPOMQZL.
     */
    ETag?: string;
  }
  export interface UpdateStreamingDistributionRequest {
    /**
     * The streaming distribution's configuration information.
     */
    StreamingDistributionConfig: StreamingDistributionConfig;
    /**
     * The streaming distribution's id.
     */
    Id: string;
    /**
     * The value of the ETag header you received when retrieving the streaming distribution's configuration. For example: E2QWRUHAPOMQZL.
     */
    IfMatch?: string;
  }
  export interface UpdateStreamingDistributionResult {
    /**
     * The streaming distribution's information.
     */
    StreamingDistribution?: StreamingDistribution;
    /**
     * The current version of the configuration. For example: E2QWRUHAPOMQZL.
     */
    ETag?: string;
  }
  export interface ViewerCertificate {
    /**
     * If you want viewers to use HTTPS to request your objects and you're using the CloudFront domain name of your distribution in your object URLs (for example, https://d111111abcdef8.cloudfront.net/logo.jpg), set to true. Omit this value if you are setting an ACMCertificateArn or IAMCertificateId.
     */
    CloudFrontDefaultCertificate?: boolean;
    /**
     * If you want viewers to use HTTPS to request your objects and you're using an alternate domain name in your object URLs (for example, https://example.com/logo.jpg), specify the IAM certificate identifier of the custom viewer certificate for this distribution. Specify either this value, ACMCertificateArn, or CloudFrontDefaultCertificate.
     */
    IAMCertificateId?: string;
    /**
     * If you want viewers to use HTTPS to request your objects and you're using an alternate domain name in your object URLs (for example, https://example.com/logo.jpg), specify the ACM certificate ARN of the custom viewer certificate for this distribution. Specify either this value, IAMCertificateId, or CloudFrontDefaultCertificate.
     */
    ACMCertificateArn?: string;
    /**
     * If you specify a value for IAMCertificateId, you must also specify how you want CloudFront to serve HTTPS requests. Valid values are vip and sni-only. If you specify vip, CloudFront uses dedicated IP addresses for your content and can respond to HTTPS requests from any viewer. However, you must request permission to use this feature, and you incur additional monthly charges. If you specify sni-only, CloudFront can only respond to HTTPS requests from viewers that support Server Name Indication (SNI). All modern browsers support SNI, but some browsers still in use don't support SNI. Do not specify a value for SSLSupportMethod if you specified true for CloudFrontDefaultCertificate.
     */
    SSLSupportMethod?: SSLSupportMethod;
    /**
     * Specify the minimum version of the SSL protocol that you want CloudFront to use, SSLv3 or TLSv1, for HTTPS connections. CloudFront will serve your objects only to browsers or devices that support at least the SSL version that you specify. The TLSv1 protocol is more secure, so we recommend that you specify SSLv3 only if your users are using browsers or devices that don't support TLSv1. If you're using a custom certificate (if you specify a value for IAMCertificateId) and if you're using dedicated IP (if you specify vip for SSLSupportMethod), you can choose SSLv3 or TLSv1 as the MinimumProtocolVersion. If you're using a custom certificate (if you specify a value for IAMCertificateId) and if you're using SNI (if you specify sni-only for SSLSupportMethod), you must specify TLSv1 for MinimumProtocolVersion.
     */
    MinimumProtocolVersion?: MinimumProtocolVersion;
    /**
     * Note: this field is deprecated. Please use one of [ACMCertificateArn, IAMCertificateId, CloudFrontDefaultCertificate].
     */
    Certificate?: string;
    /**
     * Note: this field is deprecated. Please use one of [ACMCertificateArn, IAMCertificateId, CloudFrontDefaultCertificate].
     */
    CertificateSource?: CertificateSource;
  }
  export type ViewerProtocolPolicy = "allow-all"|"https-only"|"redirect-to-https"|string;
  export type integer = number;
  export type long = number;
  export type timestamp = Date;
}
export = CloudFront;
